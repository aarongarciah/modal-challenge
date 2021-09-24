import * as React from 'react';

import type { IconProps } from './types';

// Source: https://icons.modulz.app
const WarningIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...rest }, ref) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      ref={ref}
    >
      <path
        d="M6.114 3.034a.996.996 0 1 1 1.99 0L7.877 8.95a.768.768 0 0 1-1.536 0l-.227-5.916Zm2.104 8.857a1.109 1.109 0 1 1-2.218 0 1.109 1.109 0 0 1 2.218 0Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
);

export { WarningIcon };
