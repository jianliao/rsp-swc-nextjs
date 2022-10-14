import { ActionButton, Content, Heading, Text } from "@adobe/react-spectrum";
import { useState } from "react";
import Edit from '@spectrum-icons/workflow/Edit';
import Star from '@spectrum-icons/workflow/Star';
import CodeExample from "@components/CodeExample";
import { SpActionButton } from "@swc-nextjs/action-button";
import { SpIconEdit } from "@swc-nextjs/icons-workflow/IconEdit";
import { SpIconStar } from "@swc-nextjs/icons-workflow/IconStar";

export default function ActionButtonPage() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Heading level={1}>Action Button</Heading>
      <Content>
        <CodeExample
          title="Auto Focus"
          rspCode={`<ActionButton autoFocus>Auto Focus</ActionButton>`}
          rspChildren={<ActionButton autoFocus>Auto Focus</ActionButton>}
          swcCode={`<SpActionButton autofocus>Auto Focus</SpActionButton>`}
          swcChildren={<SpActionButton autofocus>Auto Focus</SpActionButton>}
        />
        <CodeExample
          title="Base"
          rspCode={`<ActionButton>Edit</ActionButton>`}
          rspChildren={<ActionButton>Edit</ActionButton>}
          swcCode={`<SpActionButton>Edit</SpActionButton>`}
          swcChildren={<SpActionButton>Edit</SpActionButton>}
        />
        <CodeExample
          title="Quiet"
          rspCode={`<ActionButton isQuiet>Quiet</ActionButton>`}
          rspChildren={<ActionButton isQuiet>Quiet</ActionButton>}
          swcCode={`<SpActionButton quiet>Quiet</SpActionButton>`}
          swcChildren={<SpActionButton quiet>Quiet</SpActionButton>}
        />
        <CodeExample
          title="Disabled"
          rspCode={`<ActionButton isDisabled>Disabled</ActionButton>`}
          rspChildren={<ActionButton isDisabled>Disabled</ActionButton>}
          swcCode={`<SpActionButton disabled>Disabled</SpActionButton>`}
          swcChildren={<SpActionButton disabled>Disabled</SpActionButton>}
        />
        <CodeExample
          title="Event"
          rspCode={`<ActionButton onPress={() => setCount(c => c + 1)}>
  {count} Edits
</ActionButton>`}
          rspChildren={<ActionButton onPress={() => setCount(c => c + 1)}>
            {count} Edits
          </ActionButton>}
          swcCode={`<SpActionButton click={() => setCount(c => c + 1)}>
  {count} Edits
</SpActionButton>`}
          swcChildren={<SpActionButton click={() => setCount(c => c + 1)}>
            {count} Edits
          </SpActionButton>}
        />
        <CodeExample
          title="Icon with Label"
          rspCode={`<ActionButton>
  <Edit />
  <Text>Icon + Label</Text>
</ActionButton>`}
          rspChildren={<ActionButton>
            <Edit />
            <Text>Icon + Label</Text>
          </ActionButton>}
          swcCode={`<SpActionButton>
  <SpIconEdit slot="icon" />
  Edit
</SpActionButton>`}
          swcChildren={<SpActionButton>
            <SpIconEdit slot="icon" />
            Icon + Label
          </SpActionButton>}
        />
        <CodeExample
          title="Icon only"
          rspCode={`<ActionButton aria-label="Icon only">
  <Star />
</ActionButton>`}
          rspChildren={<ActionButton aria-label="Icon only">
            <Star />
          </ActionButton>}
          swcCode={`<SpActionButton>
  <SpIconStar slot="icon"></SpIconStar>
</SpActionButton>`}
          swcChildren={<SpActionButton>
            <SpIconStar slot="icon"></SpIconStar>
          </SpActionButton>}
        />
      </Content>
    </>
  )
}
