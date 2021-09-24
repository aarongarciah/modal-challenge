import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        black: '#000',
        white: '#fff',
        blue500: '#1c75ef',
        red500: '#fc2a26',
        grey500: '#4e5b63',
        grey400: '#c7ced4',
        primary: '$colors$blue500',
        info: '$colors$blue500',
        destructive: '$colors$red500',
      },
      space: {
        '0_5': '4px',
        1: '8px',
        '1_5': '12px',
        2: '16px',
        3: '24px',
        4: '32px',
      },
      sizes: {
        '0_5': '4px',
        1: '8px',
        '1_5': '12px',
        2: '16px',
        3: '24px',
        4: '32px',
      },
      fonts: {
        sans: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
      },
      fontSizes: {
        1: '12px',
        2: '16px',
        3: '20px',
      },
      lineHeights: {
        1: 1,
        2: 1.4,
      },
      fontWeights: {
        regular: '400',
        medium: '500',
      },
      radii: {
        1: '2px',
        2: '4px',
        control: '$1',
      },
      zIndices: {
        dialog: 9999,
      },
    },
    media: {
      bp1: '(width >= 480px)',
      bp2: '(width >= 768px)',
    },
  });

export type CSS = Stitches.CSS<typeof config>;
