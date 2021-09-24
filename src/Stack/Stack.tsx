import * as React from 'react';
import type * as Stitches from '@stitches/react';

import { CSS, styled, theme } from '../stitches.config';

type StackVariants = Stitches.VariantProps<typeof Wrapper>;

type StackProps = React.ComponentProps<typeof Wrapper> & {
  css?: any;
  space?: StackVariants['space'];
};

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

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ children, ...rest }: StackProps, ref) => (
    <Wrapper {...rest} ref={ref}>
      {children}
    </Wrapper>
  )
);

export { Stack };
