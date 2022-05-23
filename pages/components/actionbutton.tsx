import { ActionButton, Content, Heading, Text } from "@adobe/react-spectrum";
import { useState } from "react";
import Edit from '@spectrum-icons/workflow/Edit';
import Star from '@spectrum-icons/workflow/Star';
import CodeExample from "@components/CodeExample";

export default function ActionButtonPage() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Heading level={1}>Action Button</Heading>
      <Content>
        <CodeExample title="Auto Focus" code={`<ActionButton autoFocus>Auto Focus</ActionButton>`}>
          <ActionButton autoFocus>Auto Focus</ActionButton>
        </CodeExample>
        <CodeExample title="Base">
          <ActionButton>Edit</ActionButton>
        </CodeExample>
        <CodeExample title="Quiet">
          <ActionButton isQuiet>Quiet</ActionButton>
        </CodeExample>
        <CodeExample title="Disabled">
          <ActionButton isDisabled>Disabled</ActionButton>
        </CodeExample>
        <CodeExample title="onPress event">
          <ActionButton onPress={() => setCount(c => c + 1)}>
            {count} Edits
          </ActionButton>
        </CodeExample>
        <CodeExample title="Icon with Label">
          <ActionButton>
            <Edit />
            <Text>Icon + Label</Text>
          </ActionButton>
        </CodeExample>
        <CodeExample title="Icon only">
          <ActionButton aria-label="Icon only">
            <Star />
          </ActionButton>
        </CodeExample>
      </Content>
    </>
  )
}
