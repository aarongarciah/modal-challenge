import * as React from 'react';
import { nanoid } from 'nanoid';

const useId = (length = 5) => {
  const ref = React.useRef<null | string>(null);
  if (ref.current === null) {
    ref.current = nanoid(length);
  }
  return ref.current;
};

export { useId };
