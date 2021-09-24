import * as React from 'react';

import { styled } from '../../stitches.config';

type IconTextButtonProps = React.ComponentProps<typeof StyledButton> & {
  css?: any;
  icon: React.ReactNode;
};

const StyledButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$0_5',
  padding: '0',
  border: '0',
  backgroundColor: 'transparent',
  borderRadius: '0',
  fontFamily: '$sans',
  fontSize: '$1',
  lineHeight: '$1',
  textDecoration: 'none',
  color: '$primary',
  '&:focus': {
    outline: '2px dotted $black',
    outlineOffset: '1px',
  },
  '&:hover': {
    color: '$black',
  },
  '&:active': {
    color: '$black',
    transform: 'translateY(1px)',
  },
});

const IconTextButton = React.forwardRef<HTMLButtonElement, IconTextButtonProps>(
  ({ children, icon, ...rest }: IconTextButtonProps, ref) => (
    <StyledButton type="button" {...rest} ref={ref}>
      {icon}
      {children}
    </StyledButton>
  )
);

export { IconTextButton };
