import { Button, ButtonGroup, Content, Heading } from '@adobe/react-spectrum';
import CodeExample from '@components/CodeExample';
import { SpButtonGroup } from '@swc-next/button-group';
import { SpButton } from '@swc-next/button';

export default function ButtonPage() {
  return (
    <>
      <Heading level={1}>Button Group</Heading>
      <Content>
        <CodeExample
          title="Base"
          rspCode={`<ButtonGroup>
  <Button variant="primary">Rate Now</Button>
  <Button variant="secondary">No, thanks</Button>
  <Button variant="secondary">Remind me later</Button>
</ButtonGroup>`}
          rspChildren={
            <ButtonGroup>
              <Button variant="primary">Rate Now</Button>
              <Button variant="secondary">No, thanks</Button>
              <Button variant="secondary">Remind me later</Button>
            </ButtonGroup>
          }
          swcChildren={
            <SpButtonGroup>
              <SpButton variant="primary">Rate Now</SpButton>
              <SpButton variant="secondary">No, thanks</SpButton>
              <SpButton variant="secondary">Remind me later</SpButton>
            </SpButtonGroup>
          }
          swcCode={`<SpButtonGroup>
  <SpButton variant="primary">Rate Now</SpButton>
  <SpButton variant="secondary">No, thanks</SpButton>
  <SpButton variant="secondary">Remind me later</SpButton>
</SpButtonGroup>`}
        />
        <CodeExample
          title="Disabled"
          rspCode={`<ButtonGroup>
  <Button variant="cta">Rate Now</Button>
  <Button variant="secondary" isDisabled>Disabled</Button>
  <Button variant="secondary">Remind me later</Button>
</ButtonGroup>`}
          rspChildren={
            <ButtonGroup>
              <Button variant="cta">Rate Now</Button>
              <Button variant="secondary" isDisabled>
                Disabled
              </Button>
              <Button variant="secondary">Remind me later</Button>
            </ButtonGroup>
          }
          swcChildren={
            <SpButtonGroup>
              <SpButton variant="cta">Rate Now</SpButton>
              <SpButton variant="secondary" disabled>
                No, thanks
              </SpButton>
              <SpButton variant="secondary">Remind me later</SpButton>
            </SpButtonGroup>
          }
          swcCode={`<SpButtonGroup>
  <SpButton variant="cta">Rate Now</SpButton>
  <SpButton variant="secondary" disabled>No, thanks</SpButton>
  <SpButton variant="secondary">Remind me later</SpButton>
</SpButtonGroup>`}
        />
        <CodeExample
          title="Vertical Orientation"
          rspCode={`<ButtonGroup orientation="vertical">
  <Button variant="primary">Rate Now</Button>
  <Button variant="secondary">No, thanks</Button>
  <Button variant="secondary">Remind me later</Button>
</ButtonGroup>`}
          rspChildren={
            <ButtonGroup orientation="vertical">
              <Button variant="primary">Rate Now</Button>
              <Button variant="secondary">No, thanks</Button>
              <Button variant="secondary">Remind me later</Button>
            </ButtonGroup>
          }
          swcChildren={
            <SpButtonGroup vertical>
              <SpButton variant="primary">Rate Now</SpButton>
              <SpButton variant="secondary">No, thanks</SpButton>
              <SpButton variant="secondary">Remind me later</SpButton>
            </SpButtonGroup>
          }
          swcCode={`<SpButtonGroup vertical="false">
  <SpButton variant="primary">Rate Now</SpButton>
  <SpButton variant="secondary">No, thanks</SpButton>
  <SpButton variant="secondary">Remind me later</SpButton>
</SpButtonGroup>`}
        />
      </Content>
    </>
  );
}
