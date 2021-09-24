import { styled } from './stitches.config';
import { globalStyles } from './globalStyles';
import { Button } from './components/Button';
import { InputText } from './components/InputText';
import { Textarea } from './components/Textarea';
import { IconTextButton } from './components/IconTextButton';
import { CodeIcon, LinkIcon } from './components/icons';
import { FormControl } from './components/FormControl';
import { Stack } from './components/Stack';
import { Box } from './components/Box';
import { Heading } from './components/Heading';

const StyledWrapper = styled('main', {
  maxWidth: '500px',
  marginRight: 'auto',
  marginLeft: 'auto',
});

function App() {
  globalStyles();
  return (
    <StyledWrapper>
      <Stack space="2">
        <Heading>Edit datastream</Heading>
        <Stack space="2">
          <FormControl label={'Datastream title'}>
            <InputText />
          </FormControl>
          <FormControl label={'Description'}>
            <Textarea />
          </FormControl>
        </Stack>
        <Box
          css={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '$2' }}
        >
          <Box css={{ display: 'flex', flexWrap: 'wrap', gap: '$2' }}>
            <IconTextButton icon={<LinkIcon />}>Copy link</IconTextButton>
            <IconTextButton icon={<CodeIcon />}>Get embed code</IconTextButton>
          </Box>
          <Box css={{ display: 'flex', flexWrap: 'wrap', gap: '$2' }}>
            <Button>Cancel</Button>
            <Button variant="primary">Apply</Button>
          </Box>
        </Box>
      </Stack>
    </StyledWrapper>
  );
}

export { App };
