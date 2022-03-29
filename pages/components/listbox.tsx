import { ActionButton, Content, Heading, Text, Well } from "@adobe/react-spectrum";
import { useState } from "react";
import Edit from '@spectrum-icons/workflow/Edit';
import Star from '@spectrum-icons/workflow/Star';

export default function ListBoxPage() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Heading level={1}>List Box</Heading>
      <Content>
        <Well>
          <ActionButton autoFocus>Auto Focus</ActionButton>
        </Well>
        <Well>
          <ActionButton>Normal</ActionButton>
        </Well>
        <Well>
          <ActionButton isQuiet>Quiet</ActionButton>
        </Well>
        <Well>
          <ActionButton isDisabled>Disabled</ActionButton>
        </Well>
        <Well>
          <ActionButton onPress={() => setCount(c => c + 1)}>
            {count} Edits
          </ActionButton>
        </Well>
        <Well>
          <ActionButton>
            <Edit />
            <Text>Icon + Label</Text>
          </ActionButton>
        </Well>
        <Well>
          <ActionButton aria-label="Icon only">
            <Star />
          </ActionButton>
        </Well>
      </Content>
    </>
  )
}
