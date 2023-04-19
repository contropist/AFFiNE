import { prefixUrl } from '@affine/env';
import type { ExecutionResult } from 'graphql';
import { GraphQLError } from 'graphql';
import type { SWRConfiguration } from 'swr';
import useSWR from 'swr';

import type { GraphQLQuery } from './graphql';
import type { Mutations, Queries } from './schema';

export type NotArray<T> = T extends Array<unknown> ? never : T;

export type QueryVariables<Q extends GraphQLQuery> = Extract<
  Queries | Mutations,
  { name: Q['id'] }
>['variables'];
export type QueryResponse<Q extends GraphQLQuery> = Extract<
  Queries | Mutations,
  { name: Q['id'] }
>['response'];

type NullableKeys<T> = {
  [K in keyof T]: null extends T[K] ? K : never;
}[keyof T];

type NonNullableKeys<T> = {
  [K in keyof T]: null extends T[K] ? never : K;
}[keyof T];

export type RecursiveMaybeFields<T> = T extends
  | number
  | boolean
  | string
  | null
  | undefined
  ? T
  : {
      [K in NullableKeys<T>]?: RecursiveMaybeFields<T[K]>;
    } & {
      [K in NonNullableKeys<T>]: RecursiveMaybeFields<T[K]>;
    };

const gqlFetch = async <Q extends GraphQLQuery, Response>(
  query: Q,
  variables: QueryVariables<Q>
): Promise<Response> => {
  const ret = fetch(prefixUrl + '/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-operation-name': query.operationName,
      'x-definition-name': query.definitionName,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then(res => {
    if (res.headers.get('content-type')?.includes('application/json')) {
      const result = res.json() as ExecutionResult<Response>;
      if (res.status >= 400) {
        throw result.errors;
      } else if (result.data) {
        return result.data;
      }
    }

    throw new GraphQLError('No data returned from GraphQL query');
  });

  return ret;
};

export const useQuery = <Q extends GraphQLQuery>(
  query: Q,
  variables: QueryVariables<Q>,
  options: Omit<SWRConfiguration<QueryResponse<Q>, Error>, 'fetcher'>
) => {
  useSWR(
    query.query,
    () => {
      gqlFetch(query, variables);
    },
    // @ts-expect-error: FIX SOON
    options
  );
};
