import * as React from 'react';

import { styled } from '../stitches.config';
import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from '../types';

interface Props {
  icon: React.ReactNode;
  children: React.ReactNode;
}

type ButtonProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>;

type IconTextButtonComponent = <C extends React.ElementType = 'button'>(
  props: ButtonProps<C>
) => React.ReactElement | null;

const StyledButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$0_5',
  padding: '0',
  border: '0',
  backgroundColor: 'transparent',
  borderRadius: '0',
  fontFamily: '$sans',
  fontSize: '$1',
  lineHeight: '$1',
  textDecoration: 'none',
  color: '$primary',
  '&:focus': {
    outline: '2px dotted $black',
    outlineOffset: '1px',
  },
  '&:hover': {
    color: '$black',
  },
  '&:active': {
    color: '$black',
    transform: 'translateY(1px)',
  },
});

const IconTextButton: IconTextButtonComponent = React.forwardRef(
  <C extends React.ElementType = 'button'>(
    { children, icon, ...rest }: ButtonProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    return (
      <StyledButton type="button" {...rest} ref={ref}>
        {icon}
        {children}
      </StyledButton>
    );
  }
);

export { IconTextButton };
