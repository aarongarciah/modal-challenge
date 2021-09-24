import * as React from 'react';

import { styled } from '../stitches.config';

type TextareaProps = React.ComponentProps<typeof StyledTextarea> & { css?: any };

const StyledTextarea = styled('textarea', {
  display: 'block',
  width: '100%',
  padding: '$1 $2',
  border: '1px solid $grey400',
  backgroundColor: '$white',
  borderRadius: '$control',
  fontFamily: '$sans',
  fontSize: '$2',
  resize: 'vertical',
  '&:focus': {
    outline: 'none',
    borderColor: '$black',
  },
});

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props: TextareaProps, ref) => <StyledTextarea rows={2} {...props} ref={ref} />
);

export { Textarea };
