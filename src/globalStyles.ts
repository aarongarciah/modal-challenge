import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  '*, *:before, *:after': {
    boxSizing: 'border-box',
    fontFamily: '$sans',
  },
  '*': {
    margin: 0,
  },
});

export { globalStyles };
