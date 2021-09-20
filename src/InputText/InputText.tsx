import * as React from 'react';

import { styled } from '../stitches.config';
import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from '../types';

interface Props {}

type InputTextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>;

type InputTextComponent = <C extends React.ElementType = 'input'>(
  props: InputTextProps<C>
) => React.ReactElement | null;

const StyledInput = styled('input', {
  display: 'block',
  width: '100%',
  padding: '$1 $2',
  border: '1px solid $grey400',
  backgroundColor: '$white',
  borderRadius: '$control',
  fontFamily: '$sans',
  fontSize: '$2',
  '&:focus': {
    outline: 'none',
    borderColor: '$black',
  },
});

const InputText: InputTextComponent = React.forwardRef(
  <C extends React.ElementType = 'input'>(props: InputTextProps<C>, ref?: PolymorphicRef<C>) => {
    return (
      <StyledInput
        type={!props.as || props.as === 'input' ? 'text' : undefined}
        {...props}
        ref={ref}
      />
    );
  }
);

export { InputText };
