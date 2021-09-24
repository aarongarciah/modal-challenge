import * as React from 'react';

import type { IconProps } from './types';

// Source: https://icons.modulz.app
const InfoIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        d="M8.75 3.138c0 .628-.56 1.138-1.25 1.138s-1.25-.51-1.25-1.138C6.25 2.509 6.81 2 7.5 2s1.25.51 1.25 1.138ZM5 5.414h2.5c.46 0 .833.34.833.758v5.31H10V13H5v-1.517H6.667V6.93H5V5.414Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
);

export { InfoIcon };
