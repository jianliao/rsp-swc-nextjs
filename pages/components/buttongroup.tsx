import { Button, ButtonGroup, Content, Heading } from "@adobe/react-spectrum";
import CodeExample from "@components/CodeExample";

export default function ButtonPage() {
  return (
    <>
      <Heading level={1}>Button Group</Heading>
      <Content>
        <CodeExample title="Base">
          <ButtonGroup>
            <Button variant="primary">Rate Now</Button>
            <Button variant="secondary">No, thanks</Button>
            <Button variant="secondary">Remind me later</Button>
          </ButtonGroup>
        </CodeExample>
        <CodeExample title="Disabled">
          <ButtonGroup>
            <Button variant="cta">Rate Now</Button>
            <Button variant="secondary" isDisabled>Disabled</Button>
            <Button variant="secondary">Remind me later</Button>
          </ButtonGroup>
        </CodeExample>
        <CodeExample title="Vertical Orientation">
          <ButtonGroup orientation="vertical">
            <Button variant="primary">Rate Now</Button>
            <Button variant="secondary">No, thanks</Button>
            <Button variant="secondary">Remind me later</Button>
          </ButtonGroup>
        </CodeExample>
      </Content>
    </>
  )
}
