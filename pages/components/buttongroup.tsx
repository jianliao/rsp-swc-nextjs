import { Button, ButtonGroup, Content, Heading, Well } from "@adobe/react-spectrum";

export default function ButtonPage() {
  return (
    <>
      <Heading level={1}>Button Group</Heading>
      <Content>
        <Well>
          <ButtonGroup>
            <Button variant="primary">Rate Now</Button>
            <Button variant="secondary">No, thanks</Button>
            <Button variant="secondary">Remind me later</Button>
          </ButtonGroup>
        </Well>
        <Well>
          <ButtonGroup>
            <Button variant="cta">Rate Now</Button>
            <Button variant="secondary" isDisabled>Disabled</Button>
            <Button variant="secondary">Remind me later</Button>
          </ButtonGroup>
        </Well>
        <Well>
          <ButtonGroup orientation="vertical">
            <Button variant="primary">Rate Now</Button>
            <Button variant="secondary">No, thanks</Button>
            <Button variant="secondary">Remind me later</Button>
          </ButtonGroup>
        </Well>
      </Content>
    </>
  )
}
