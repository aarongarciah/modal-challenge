import * as React from 'react';

import { InputText } from '../InputText';

type TextareaProps = React.ComponentProps<typeof InputText>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props: TextareaProps, ref) => {
    return <InputText as="textarea" rows={2} css={{ resize: 'vertical' }} {...props} ref={ref} />;
  }
);

export { Textarea };
