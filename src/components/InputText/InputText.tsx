import * as React from 'react';

import { styled } from '../../stitches.config';

type InputTextProps = React.ComponentProps<typeof StyledInput> & {
  as?: string | React.ReactElement;
  css?: any;
};

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

const InputText = React.forwardRef<HTMLInputElement & HTMLTextAreaElement, InputTextProps>(
  (props: InputTextProps, ref) => (
    <StyledInput
      type={!props.as || props.as === 'input' ? 'text' : undefined}
      {...props}
      ref={ref}
    />
  )
);

export { InputText };
