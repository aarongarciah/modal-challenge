import * as React from 'react';

import { styled } from '../stitches.config';

interface LabelProps {
  children?: React.ReactNode;
}

const StyledLabel = styled('label', {
  display: 'block',
  fontFamily: '$sans',
  fontSize: '$1',
  lineHeight: '$2',
  fontWeight: '$regular',
  color: '$grey500',
});

const Label = React.forwardRef<HTMLLabelElement, LabelProps>((props: LabelProps, ref) => {
  return <StyledLabel {...props} ref={ref} />;
});

export { Label };
