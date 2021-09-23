import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  '*, *:before, *:after': {
    boxSizing: 'border-box',
  },
  '*': {
    margin: 0,
  },
  '*:not(code)': {
    fontFamily: '$sans',
  },
});

export { globalStyles };
