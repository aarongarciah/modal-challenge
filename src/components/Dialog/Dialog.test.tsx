import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent, { TargetElement } from '@testing-library/user-event';

import { Dialog } from '.';

import { Button } from '../Button';

const template = (options: Record<string, any> = {}) => {
  const { open = true, onClose = () => {}, ...rest } = options;
  return (
    <Dialog open={open} onClose={onClose} {...rest}>
      <Dialog.Header>
        <Dialog.Title>Dialog title</Dialog.Title>
        <Dialog.CloseButton />
      </Dialog.Header>
      <Dialog.Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum augue sapien, nec
          tincidunt risus ullamcorper vehicula. Mauris justo dolor, euismod sed lorem in, pretium
          vulputate enim. Praesent blandit eu sem sed vehicula.
        </p>
      </Dialog.Content>
      <Dialog.Footer>
        <Dialog.Actions>
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="primary" onClick={onClose}>
            Apply
          </Button>
        </Dialog.Actions>
      </Dialog.Footer>
    </Dialog>
  );
};

test('should fire onClose callback when close button is clicked', () => {
  const onClose = jest.fn();
  render(template({ onClose }));

  userEvent.click(screen.getByLabelText('Close'));

  expect(onClose).toHaveBeenCalledTimes(1);
});

test('should fire onClose callback when pressing esc', () => {
  const onClose = jest.fn();
  render(template({ 'data-test-id': 'dialog', onClose }));

  userEvent.type(screen.getByRole('dialog'), '{esc}');

  expect(onClose).toHaveBeenCalled();
});

describe('overlay', () => {
  test('should fire onClose callback when is clicked', () => {
    const onClose = jest.fn();
    render(template({ onClose }));
    const overlay = document.querySelector('[data-dialog-overlay]');

    userEvent.click(overlay as TargetElement);

    expect(onClose).toHaveBeenCalled();
  });

  test('should NOT fire onClose callback when click is disabled', () => {
    const onClose = jest.fn();
    render(template({ onClose, closeOnOverlayClick: false }));
    const overlay = document.querySelector('[data-dialog-overlay]');

    userEvent.click(overlay as TargetElement);

    expect(onClose).not.toHaveBeenCalled();
  });
});

describe('focus management', () => {
  test('inner container should receive focus if no focusable element are found', () => {
    render(
      <Dialog open={true}>
        <Dialog.Header>
          <Dialog.Title>Dialog title</Dialog.Title>
        </Dialog.Header>
        <Dialog.Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum augue sapien, nec
            tincidunt risus ullamcorper vehicula. Mauris justo dolor, euismod sed lorem in, pretium
            vulputate enim. Praesent blandit eu sem sed vehicula.
          </p>
        </Dialog.Content>
        <Dialog.Footer>
          <Dialog.Actions>Footer</Dialog.Actions>
        </Dialog.Footer>
      </Dialog>
    );

    expect(screen.getByRole('dialog')).toHaveFocus();
  });

  test('initial ref should receive focus when opening the dialog', () => {
    function Test() {
      const [open, setOpen] = React.useState(false);
      const initialRef = React.useRef(null);
      return (
        <>
          <button type="button" onClick={() => setOpen(true)}>
            Open
          </button>
          <Dialog open={open} initialFocusRef={initialRef}>
            <Dialog.Header>
              <Dialog.Title>Dialog title</Dialog.Title>
              <Dialog.CloseButton />
            </Dialog.Header>
            <Dialog.Content>
              <button ref={initialRef}>Hey</button>
            </Dialog.Content>
          </Dialog>
        </>
      );
    }
    render(<Test />);

    userEvent.click(screen.getByText('Open'));

    expect(screen.getByText('Hey')).toHaveFocus();
  });

  test('final ref should receive focus when closing the dialog', () => {
    function Test() {
      const [open, setOpen] = React.useState(false);
      const finalRef = React.useRef(null);
      return (
        <>
          <button type="button" onClick={() => setOpen(true)} ref={finalRef}>
            Open
          </button>
          <Dialog open={open} onClose={() => setOpen(false)} finalFocusRef={finalRef}>
            <Dialog.Header>
              <Dialog.Title>Dialog title</Dialog.Title>
              <Dialog.CloseButton />
            </Dialog.Header>
            <Dialog.Content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum augue sapien,
                nec tincidunt risus ullamcorper vehicula. Mauris justo dolor, euismod sed lorem in,
                pretium vulputate enim. Praesent blandit eu sem sed vehicula.
              </p>
            </Dialog.Content>
          </Dialog>
        </>
      );
    }
    render(<Test />);

    const button = screen.getByText('Open');

    expect(button).not.toHaveFocus();

    userEvent.click(button);
    userEvent.click(screen.getByLabelText('Close'));

    expect(button).toHaveFocus();
  });
});
