import * as React from 'react';
import { Box } from '../Box';
import { InfoIcon, WarningIcon } from '../icons';

import { styled } from '../stitches.config';

type AlertProps = Omit<React.ComponentProps<typeof Box>, 'variant'> & {
  css?: any;
  variant?: 'info' | 'error';
};

const ICONS = {
  info: <InfoIcon width="16" height="16" />,
  error: <WarningIcon width="16" height="16" />,
};

const COLORS = {
  info: '$info',
  error: '$destructive',
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ children, variant = 'info', ...rest }: AlertProps, ref) => (
    <Box
      role="alert"
      css={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gridGap: '$2',
        fontFamily: '$sans',
        fontSize: '$2',
        lineHeight: '$2',
        fontWeight: '$regular',
        backgroundColor: '$white',
      }}
      {...rest}
      ref={ref}
    >
      <Box
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '20px',
          height: '20px',
          borderRadius: '100%',
          color: '$white',
          backgroundColor: COLORS[variant],
        }}
      >
        {ICONS[variant]}
      </Box>
      <div>{children}</div>
    </Box>
  )
);

export { Alert };
