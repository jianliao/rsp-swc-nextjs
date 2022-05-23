import { Button, Content, Heading, Text } from "@adobe/react-spectrum";
import { useState } from "react";
import Bell from '@spectrum-icons/workflow/Bell';
import CodeExample from "@components/CodeExample";

export default function ButtonPage() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Heading level={1}>Button</Heading>
      <Content>
        <CodeExample title="Auto Focus">
          <Button variant="primary" autoFocus>Auto Focus</Button>
        </CodeExample>
        <CodeExample title="CTA">
          <Button variant="cta">Call To Action</Button>
        </CodeExample>
        <CodeExample title="Primary">
          <Button variant="primary">Primary</Button>
        </CodeExample>
        <CodeExample title="Secondary">
          <Button variant="secondary">Secondary</Button>
        </CodeExample>
        <CodeExample title="Negative">
          <Button variant="negative">Negative</Button>
        </CodeExample>
        <CodeExample title="Icon + Label">
          <Button variant="primary">
            <Bell />
            <Text>Icon + Label</Text>
          </Button>
        </CodeExample>
        <CodeExample title="Event">
          <Button variant="primary" onPress={() => setCount(c => c + 1)}>
            {count} Dogs
          </Button>
        </CodeExample>
        <CodeExample title="Quiet">
          <Button variant="primary" isQuiet>
            Quiet
          </Button>
        </CodeExample>
        <CodeExample title="Disabled">
          <Button variant="primary" isDisabled>
            Disabled
          </Button>
        </CodeExample>
      </Content>
    </>
  )
}
