import * as React from 'react';
import { Label } from '../Label';

import { styled } from '../stitches.config';
import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from '../types';

interface Props {
  label: string;
  children: React.ReactNode;
}

type FormControlProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>;

type FormControlComponent = <C extends React.ElementType = 'div'>(
  props: FormControlProps<C>
) => React.ReactElement | null;

const Wrapper = styled('div', {
  display: 'block',
  '> * + *': {
    marginTop: '$0_5',
  },
});

const StyledLabel = styled(Label, {
  display: 'block',
});

const FormControl: FormControlComponent = React.forwardRef(
  <C extends React.ElementType = 'div'>(
    { children, label, ...rest }: FormControlProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    return (
      <Wrapper {...rest} ref={ref}>
        <StyledLabel>
          <div>{label}</div>
          {children}
        </StyledLabel>
      </Wrapper>
    );
  }
);

export { FormControl };
