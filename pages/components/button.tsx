import { Button, Content, Heading, Text, Well } from "@adobe/react-spectrum";
import { useState } from "react";
import Bell from '@spectrum-icons/workflow/Bell';

export default function ButtonPage() {
  let [count, setCount] = useState(0);

  return (
    <>
      <Heading level={1}>Button</Heading>
      <Content>
        <Well>
          <Button variant="primary" autoFocus>Auto Focus</Button>
        </Well>
        <Well>
          <Button variant="cta">Call To Action</Button>
        </Well>
        <Well>
          <Button variant="primary">Primary</Button>
        </Well>
        <Well>
          <Button variant="secondary">Secondary</Button>
        </Well>
        <Well>
          <Button variant="negative">Negative</Button>
        </Well>
        <Well>
          <Button variant="primary">
            <Bell />
            <Text>Icon + Label</Text>
          </Button>
        </Well>
        <Well>
          <Button variant="primary" onPress={() => setCount((c) => c + 1)}>
            {count} Dogs
          </Button>
        </Well>
        <Well>
          <Button variant="primary" isQuiet>
            Quiet
          </Button>
        </Well>
        <Well>
          <Button variant="primary" isDisabled>
            Disabled
          </Button>
        </Well>
      </Content>
    </>
  )
}
