import React, { FormEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dialog } from '.';
import type { DialogProps } from '.';
import { Button } from '../Button';
import { Box } from '../Box';
import { IconTextButton } from '../IconTextButton';
import { CodeIcon, LinkIcon } from '../icons';
import { Stack } from '../Stack';
import { FormControl } from '../FormControl';
import { InputText } from '../InputText';
import { Textarea } from '../Textarea';

export default {
  title: 'Dialog',
  component: Dialog,
  argTypes: {
    children: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Dialog>;

type TemplateProps = DialogProps & { children: any };

const Template: ComponentStory<typeof Dialog> = ({ children, onClose, ...args }: TemplateProps) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      {children({
        onClose: () => {
          onClose?.();
          setOpen(false);
        },
        open,
        ...args,
      })}
    </>
  );
};

export const Complete = Template.bind({});
Complete.args = {
  children: ({ open, onClose, ...args }: any) => (
    <Dialog open={open} onClose={onClose} {...args}>
      <Dialog.Header>
        <Dialog.Title>Title</Dialog.Title>
        <Dialog.CloseButton />
      </Dialog.Header>
      <Dialog.Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum augue sapien, nec
          tincidunt risus ullamcorper vehicula. Mauris justo dolor, euismod sed lorem in, pretium
          vulputate enim. Praesent blandit eu sem sed vehicula.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum augue sapien, nec
          tincidunt risus ullamcorper vehicula. Mauris justo dolor, euismod sed lorem in, pretium
          vulputate enim. Praesent blandit eu sem sed vehicula.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum augue sapien, nec
          tincidunt risus ullamcorper vehicula. Mauris justo dolor, euismod sed lorem in, pretium
          vulputate enim. Praesent blandit eu sem sed vehicula.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum augue sapien, nec
          tincidunt risus ullamcorper vehicula. Mauris justo dolor, euismod sed lorem in, pretium
          vulputate enim. Praesent blandit eu sem sed vehicula.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum augue sapien, nec
          tincidunt risus ullamcorper vehicula. Mauris justo dolor, euismod sed lorem in, pretium
          vulputate enim. Praesent blandit eu sem sed vehicula.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum augue sapien, nec
          tincidunt risus ullamcorper vehicula. Mauris justo dolor, euismod sed lorem in, pretium
          vulputate enim. Praesent blandit eu sem sed vehicula.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum augue sapien, nec
          tincidunt risus ullamcorper vehicula. Mauris justo dolor, euismod sed lorem in, pretium
          vulputate enim. Praesent blandit eu sem sed vehicula.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum augue sapien, nec
          tincidunt risus ullamcorper vehicula. Mauris justo dolor, euismod sed lorem in, pretium
          vulputate enim. Praesent blandit eu sem sed vehicula.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum augue sapien, nec
          tincidunt risus ullamcorper vehicula. Mauris justo dolor, euismod sed lorem in, pretium
          vulputate enim. Praesent blandit eu sem sed vehicula.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum augue sapien, nec
          tincidunt risus ullamcorper vehicula. Mauris justo dolor, euismod sed lorem in, pretium
          vulputate enim. Praesent blandit eu sem sed vehicula.
        </p>
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
  ),
};

export const Large = Template.bind({});
Large.args = {
  children: ({ open, onClose, ...args }: any) => (
    <Dialog open={open} onClose={onClose} size="large" {...args}>
      <Dialog.Header>
        <Dialog.Title>Title</Dialog.Title>
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
  ),
};

export const WithoutHeader = Template.bind({});
WithoutHeader.args = {
  children: ({ open, onClose, ...args }: any) => (
    <Dialog open={open} onClose={onClose} aria-label="Title" {...args}>
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
  ),
};

export const WithoutFooter = Template.bind({});
WithoutFooter.args = {
  children: ({ open, onClose, ...args }: any) => (
    <Dialog open={open} onClose={onClose} {...args}>
      <Dialog.Header>
        <Dialog.Title>Title</Dialog.Title>
        <Dialog.CloseButton />
      </Dialog.Header>
      <Dialog.Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum augue sapien, nec
          tincidunt risus ullamcorper vehicula. Mauris justo dolor, euismod sed lorem in, pretium
          vulputate enim. Praesent blandit eu sem sed vehicula.
        </p>
      </Dialog.Content>
    </Dialog>
  ),
};

export const WithoutCloseButton = Template.bind({});
WithoutCloseButton.args = {
  children: ({ open, onClose, ...args }: any) => (
    <Dialog open={open} onClose={onClose} {...args}>
      <Dialog.Header>
        <Dialog.Title>Title</Dialog.Title>
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
  ),
};

export const CustomFooter = Template.bind({});
CustomFooter.args = {
  children: ({ open, onClose, ...args }: any) => (
    <Dialog open={open} onClose={onClose} {...args}>
      <Dialog.Header>
        <Dialog.Title>Title</Dialog.Title>
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
        <Box
          css={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '$2',
          }}
        >
          <Box css={{ display: 'flex', flexWrap: 'wrap', gap: '$2' }}>
            <IconTextButton icon={<LinkIcon />}>Copy link</IconTextButton>
            <IconTextButton icon={<CodeIcon />}>Get embed code</IconTextButton>
          </Box>
          <Dialog.Actions>
            <Button onClick={onClose}>Cancel</Button>
            <Button variant="primary" onClick={onClose}>
              Apply
            </Button>
          </Dialog.Actions>
        </Box>
      </Dialog.Footer>
    </Dialog>
  ),
};

export const Form = Template.bind({});
Form.args = {
  children: ({ open, onClose, ...args }: any) => (
    <Dialog
      as="form"
      action="#"
      acceptCharset="utf-8"
      open={open}
      onClose={onClose}
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        alert('submitted');
        onClose();
      }}
      {...args}
    >
      <Dialog.Header>
        <Dialog.Title>Title</Dialog.Title>
        <Dialog.CloseButton />
      </Dialog.Header>
      <Dialog.Content>
        <Stack space="2">
          <FormControl label={'Datastream title'}>
            <InputText required />
          </FormControl>
          <FormControl label={'Description'}>
            <Textarea required />
          </FormControl>
        </Stack>
      </Dialog.Content>
      <Dialog.Footer>
        <Dialog.Actions>
          <Button type="reset">Reset</Button>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="primary">
            Apply
          </Button>
        </Dialog.Actions>
      </Dialog.Footer>
    </Dialog>
  ),
};

export const AvoidClosingOnOverlayClick = Template.bind({});
AvoidClosingOnOverlayClick.args = {
  children: ({ open, onClose, ...args }: any) => (
    <Dialog open={open} onClose={onClose} closeOnOverlayClick={false} {...args}>
      <Dialog.Header>
        <Dialog.Title>Title</Dialog.Title>
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
  ),
};

export const CustomInitialFocus = Template.bind({});
CustomInitialFocus.args = {
  children: function CustomInitialFocus({ open, onClose, ...args }: any) {
    const titleRef = React.useRef<HTMLHeadingElement>(null);
    return (
      <Dialog open={open} onClose={onClose} initialFocusRef={titleRef} {...args}>
        <Dialog.Header>
          <Dialog.Title
            tabIndex={0}
            ref={titleRef}
            css={{ '&:focus': { outline: '2px dotted $black' } }}
          >
            This element will receive focus. Remember to add <code>tabIndex={0}</code> to
            non-interactive elements.
          </Dialog.Title>
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
  },
};

export const CustomFinalFocus = Template.bind({});
CustomFinalFocus.args = {
  children: function CustomFinalFocus({ open, onClose, ...args }: any) {
    const finalRef = React.useRef<HTMLHeadingElement>(null);
    return (
      <>
        <Box
          as="p"
          tabIndex={0}
          ref={finalRef}
          css={{ marginTop: '$4', '&:focus': { outline: '2px dotted $black' } }}
        >
          This element will receive focus after the dialog is closed. Remember to add{' '}
          <code>tabIndex={0}</code> to non-interactive elements.
        </Box>
        <Dialog open={open} onClose={onClose} finalFocusRef={finalRef} {...args}>
          <Dialog.Header>
            <Dialog.Title>Title</Dialog.Title>
            <Dialog.CloseButton />
          </Dialog.Header>
          <Dialog.Content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum augue sapien,
              nec tincidunt risus ullamcorper vehicula. Mauris justo dolor, euismod sed lorem in,
              pretium vulputate enim. Praesent blandit eu sem sed vehicula.
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
      </>
    );
  },
};
