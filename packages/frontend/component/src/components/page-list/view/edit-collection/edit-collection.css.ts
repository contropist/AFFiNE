import { style } from '@vanilla-extract/css';

export const ellipsis = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const pagesBottomLeft = style({
  display: 'flex',
  gap: 8,
  alignItems: 'center',
});

export const pagesBottom = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px 24px',
  borderTop: '1px solid var(--affine-border-color)',
  flexWrap: 'wrap',
  gap: '12px',
});

export const pagesTabContent = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 8,
  alignItems: 'center',
  padding: '16px 16px 8px 16px',
});

export const pagesTab = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  overflow: 'hidden',
});

export const pagesList = style({
  display: 'flex',
  flex: 1,
  overflow: 'hidden',
});

export const bottomLeft = style({
  display: 'flex',
  gap: 8,
  alignItems: 'center',
});

export const rulesBottom = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px 24px',
  borderTop: '1px solid var(--affine-border-color)',
  flexWrap: 'wrap',
  gap: '12px',
});

export const includeListTitle = style({
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '22px',
  color: 'var(--affine-text-secondary-color)',
  padding: '4px 16px',
  borderTop: '1px solid var(--affine-border-color)',
});

export const rulesContainerRight = style({
  flex: 2,
  flexDirection: 'column',
  borderLeft: '1px solid var(--affine-border-color)',
  overflowX: 'hidden',
  overflowY: 'auto',
});

export const includeAddButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  padding: '4px 8px',
  fontSize: 14,
  lineHeight: '22px',
  width: 'max-content',
});

export const includeItemTitle = style({ overflow: 'hidden', fontWeight: 600 });

export const includeItemContentIs = style({
  padding: '0 8px',
  color: 'var(--affine-text-secondary-color)',
});

export const includeItemContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  fontSize: 12,
  lineHeight: '20px',
  overflow: 'hidden',
});

export const includeItem = style({
  display: 'flex',
  alignItems: 'center',
  width: 'max-content',
  backgroundColor: 'var(--affine-background-primary-color)',
  overflow: 'hidden',
  gap: 16,
  whiteSpace: 'nowrap',
  border: '1px solid var(--affine-border-color)',
  borderRadius: 8,
  padding: '4px 8px 4px',
});

export const includeTitle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  fontSize: 14,
  lineHeight: '22px',
});

export const rulesContainerLeftContentInclude = style({
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  flexShrink: 0,
});

export const rulesContainerLeftContent = style({
  padding: '12px 16px 16px',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  overflow: 'hidden',
});

export const rulesContainerLeftTab = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 8,
  alignItems: 'center',
  padding: '16px 16px 8px 16px',
});

export const rulesContainerLeft = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const rulesContainer = style({
  display: 'flex',
  overflow: 'hidden',
  flex: 1,
});

export const collectionEditContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const confirmButton = style({
  marginLeft: 20,
});

export const resultPages = style({
  width: '100%',
});

export const pageList = style({
  width: '100%',
});

export const previewCountTipsHighlight = style({
  color: 'var(--affine-primary-color)',
});

export const previewCountTips = style({
  fontSize: 12,
  lineHeight: '20px',
  color: 'var(--affine-text-secondary-color)',
});
export const selectedCountTips = style({
  fontSize: 12,
  lineHeight: '20px',
  color: 'var(--affine-text-primary-color)',
});

export const rulesTitleHighlight = style({
  color: 'var(--affine-primary-color)',
  fontStyle: 'italic',
  fontWeight: 800,
});

export const tabButton = style({ height: 28 });
export const icon = style({
  color: 'var(--affine-icon-color)',
});
export const button = style({
  userSelect: 'none',
  borderRadius: 4,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: 'var(--affine-hover-color)',
  },
});
export const bottomButton = style({
  padding: '4px 12px',
  borderRadius: 8,
});

export const previewActive = style({
  backgroundColor: 'var(--affine-hover-color-filled)',
});
export const rulesTitle = style({
  padding: '20px 24px',
  userSelect: 'none',
  fontSize: 20,
  lineHeight: '24px',
  color: 'var(--affine-text-secondary-color)',
  borderBottom: '1px solid var(--affine-border-color)',
});
