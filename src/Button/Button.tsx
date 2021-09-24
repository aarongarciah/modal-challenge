import * as React from 'react';

import { styled } from '../stitches.config';
import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from '../types';

interface Props {
  children?: React.ReactNode;
  variant?: 'default' | 'primary';
}

type ButtonProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>;

type ButtonComponent = <C extends React.ElementType = 'button'>(
  props: ButtonProps<C>
) => React.ReactElement | null;

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

const Button: ButtonComponent = React.forwardRef(
  <C extends React.ElementType = 'button'>(props: ButtonProps<C>, ref?: PolymorphicRef<C>) => {
    return <StyledButton type="button" {...props} ref={ref} />;
  }
);

export { Button };
