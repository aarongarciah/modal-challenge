import * as React from 'react';

import { styled } from '../stitches.config';

type ButtonProps = React.ComponentProps<typeof StyledButton> & { css?: any };

const StyledButton = styled('button', {
  padding: '$1',
  border: '1px solid transparent',
  backgroundColor: '$white',
  borderRadius: '$control',
  fontFamily: '$sans',
  fontSize: '$2',
  lineHeight: '$1',
  fontWeight: '$medium',
  textDecoration: 'none',
  '&:focus': {
    outline: '2px dotted $black',
    outlineOffset: '1px',
  },
  '&:active': {
    transform: 'translateY(1px)',
  },
  variants: {
    variant: {
      default: {
        borderColor: '$grey400',
        backgroundColor: '$white',
        color: '$primary',
        '&:hover, &:active': {
          borderColor: '$black',
          color: '$black',
        },
      },
      primary: {
        borderColor: '$primary',
        backgroundColor: '$primary',
        color: '$white',
        '&:hover, &:active': {
          borderColor: '$black',
          backgroundColor: '$black',
        },
      },
      destructive: {
        borderColor: '$destructive',
        backgroundColor: '$destructive',
        color: '$white',
        '&:hover, &:active': {
          borderColor: '$black',
          backgroundColor: '$black',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => (
  <StyledButton type="button" {...props} ref={ref} />
));

export { Button };
