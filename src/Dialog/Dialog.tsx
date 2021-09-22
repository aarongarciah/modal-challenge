import * as React from 'react';
import type * as Stitches from '@stitches/react';

import { styled } from '../stitches.config';
import { CrossIcon } from '../icons';
import { Heading } from '../Heading';
import { Box } from '../Box';
import { useId } from '../hooks';

const DialogContext = React.createContext<{ labelId?: string; onClose?: () => void }>({});

interface DialogProps {
  children: React.ReactNode;
  onClose: () => void;
  open?: boolean;
  size?: Stitches.VariantProps<typeof Inner>['size'];
}

type OuterProps = React.ComponentProps<typeof Box> & { css?: any };

const Outer = (props: OuterProps) => (
  <Box
    css={{
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: '$dialog',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '$3',
    }}
    {...props}
  />
);

type OverlayProps = React.ComponentProps<typeof Box> & { css?: any };

const Overlay = (props: OverlayProps) => {
  const { onClose } = React.useContext(DialogContext);
  return (
    <Box
      css={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: '$black',
        opacity: '0.48',
      }}
      onClick={onClose}
      {...props}
    />
  );
};

const Inner = styled('section', {
  position: 'relative',
  display: 'grid',
  gridTemplateAreas: `"header"
    "content"
    "footer"`,
  gridTemplateRows: 'auto 1fr auto',
  flex: '0 1 auto',
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius: '$2',
  backgroundColor: '$white',
  boxShadow: `0 1px 1px hsl(0deg 0% 0% / 0.075),
  0 2px 2px hsl(0deg 0% 0% / 0.075),
  0 4px 4px hsl(0deg 0% 0% / 0.075),
  0 8px 8px hsl(0deg 0% 0% / 0.075),
  0 16px 16px hsl(0deg 0% 0% / 0.075)`,
  variants: {
    size: {
      regular: {
        width: '540px',
      },
      large: {
        width: '660px',
      },
    },
  },
  defaultVariants: {
    size: 'regular',
  },
});

const DialogHeader = styled('header', {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gridArea: 'header',
  justifyContent: 'space-between',
  padding: '$3',
  borderBottom: '1px solid $grey400',
});

type DialogTitleProps = React.ComponentProps<typeof Heading> & { css?: any };

const DialogTitle = (props: DialogTitleProps) => {
  const { labelId } = React.useContext(DialogContext);
  return <Heading id={labelId} {...props} />;
};

interface DialogCloseButtonProps {
  'aria-label'?: string;
  onClick?: () => void;
}

const StyledCloseButton = styled('button', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '$3',
  height: '$3',
  padding: 0,
  border: 'none',
  borderRadius: 0,
  background: 'none',
  color: '$grey500',
  '&:focus, &:active': {
    outline: 'none',
    color: '$black',
  },
  '&:active': {
    transform: 'translateY(1px)',
  },
});

const DialogCloseButton = React.forwardRef<HTMLButtonElement, DialogCloseButtonProps>(
  ({ onClick, 'aria-label': ariaLabel, ...rest }, ref) => {
    const { onClose } = React.useContext(DialogContext);
    const handleClick = () => {
      onClose?.();
      onClick?.();
    };
    return (
      <StyledCloseButton
        type="button"
        aria-label={ariaLabel || 'Close'}
        onClick={handleClick}
        {...rest}
        ref={ref}
      >
        <CrossIcon />
      </StyledCloseButton>
    );
  }
);

const DialogContent = styled('div', {
  display: 'block',
  gridArea: 'content',
  padding: '$3',
  overflow: 'auto',
});

const DialogFooter = styled('footer', {
  display: 'block',
  gridArea: 'footer',
  padding: '$3',
  borderTop: '1px solid $grey400',
});

const DialogActions = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  gap: '$2',
});

const Dialog = ({ children, onClose, open, size = 'regular', ...rest }: DialogProps) => {
  const labelId = useId();
  return open ? (
    <DialogContext.Provider value={{ labelId, onClose }}>
      <Outer>
        <Overlay />
        <Inner aria-labelledby={labelId} size={size} {...rest}>
          {children}
        </Inner>
      </Outer>
    </DialogContext.Provider>
  ) : null;
};

Dialog.Header = DialogHeader;
Dialog.Title = DialogTitle;
Dialog.CloseButton = DialogCloseButton;
Dialog.Content = DialogContent;
Dialog.Footer = DialogFooter;
Dialog.Actions = DialogActions;

export { Dialog };
export type { DialogProps };
