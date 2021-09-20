import { styled } from './stitches.config';
import { globalStyles } from './globalStyles';
import { Button } from './Button';
import { InputText } from './InputText';
import { Textarea } from './Textarea';
import { IconTextButton } from './IconTextButton';
import { CodeIcon, LinkIcon } from './icons';
import { FormControl } from './FormControl';
import { Stack } from './Stack';
import { Box } from './Box';
import { Heading } from './Heading';

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

export default App;
