import * as React from 'react';
import type * as Stitches from '@stitches/react';

import { CSS, styled, theme } from '../stitches.config';
import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from '../types';

type StackVariants = Stitches.VariantProps<typeof Wrapper>;

interface Props {
  children?: React.ReactNode;
  space?: StackVariants['space'];
}

type StackProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>;

type StackComponent = <C extends React.ElementType = 'div'>(
  props: StackProps<C>
) => React.ReactElement | null;

const space = {} as Record<string, CSS>;

for (let k in theme.space) {
  space[k] = {
    gridGap: `$${k}`,
  };
}

const Wrapper = styled('div', {
  display: 'grid',
  variants: {
    space,
  },
  defaultVariants: {
    space: '1',
  },
});

const Stack: StackComponent = React.forwardRef(
  <C extends React.ElementType = 'div'>(
    { children, ...rest }: StackProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    return (
      <Wrapper {...rest} ref={ref}>
        {children}
      </Wrapper>
    );
  }
);

export { Stack };
