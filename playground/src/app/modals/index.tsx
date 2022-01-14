/** Custom modals contents. Every key will be used to index which content will be showed (through Redux actions) */
const MODALS: Record<string, JSX.Element | Element | string> = {
  DEFAULT: <div />,
} as const;

export default MODALS;
