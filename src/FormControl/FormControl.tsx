import * as React from 'react';

import { styled } from '../stitches.config';
import { Label } from '../Label';

type FormControlProps = React.ComponentProps<typeof Wrapper> & { css?: any; label: string };

const Wrapper = styled('div', {
  display: 'block',
  '> * + *': {
    marginTop: '$0_5',
  },
});

const StyledLabel = styled(Label, {
  display: 'block',
});

const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  ({ children, label, ...rest }: FormControlProps, ref) => (
    <Wrapper {...rest} ref={ref}>
      <StyledLabel>
        <div>{label}</div>
        {children}
      </StyledLabel>
    </Wrapper>
  )
);

export { FormControl };
