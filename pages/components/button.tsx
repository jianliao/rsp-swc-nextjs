import { Button, Content, Heading, Text } from "@adobe/react-spectrum";
import { useState } from "react";
import Bell from '@spectrum-icons/workflow/Bell';
import CodeExample from "@components/CodeExample";
import { SpIconBell } from "@swc-nextjs/icons-workflow/IconBell";
import { SpButton } from "@swc-nextjs/button";

export default function ButtonPage() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Heading level={1}>Button</Heading>
      <Content>
        <CodeExample
          title="Auto Focus"
          rspCode={`<Button variant="primary" autoFocus>Confirm</Button>`}
          rspChildren={<Button variant="primary" autoFocus>Confirm</Button>}
          swcCode={`<SpButton autofocus>Confirm</SpButton>`}
          swcChildren={<SpButton variant="primary" autofocus>Confirm</SpButton>}
        />
        <CodeExample
          title="CTA/Accent"
          rspCode={`<Button variant="cta">Call To Action</Button>`}
          rspChildren={<Button variant="cta">Call To Action</Button>}
          swcCode={`<SpButton variant="accent">Call To Action</SpButton>`}
          swcChildren={<SpButton variant="accent">Call To Action</SpButton>}
        />
        <CodeExample
          title="Primary"
          rspCode={`<Button variant="primary">Primary</Button>`}
          rspChildren={<Button variant="primary">Primary</Button>}
          swcCode={`<SpButton variant="primary">Primary</SpButton>`}
          swcChildren={<SpButton variant="primary">Primary</SpButton>}
        />
        <CodeExample
          title="Secondary"
          rspCode={`<Button variant="secondary">Secondary</Button>`}
          rspChildren={<Button variant="secondary">Secondary</Button>}
          swcCode={`<SpButton variant="secondary">Secondary</SpButton>`}
          swcChildren={<SpButton variant="secondary">Secondary</SpButton>}
        />
        <CodeExample
          title="Negative"
          rspCode={`<Button variant="negative">Negative</Button>`}
          rspChildren={<Button variant="negative">Negative</Button>}
          swcCode={`<SpButton variant="negative">Negative</SpButton>`}
          swcChildren={<SpButton variant="negative">Secondary</SpButton>}
        />
        <CodeExample
          title="Icon + Label"
          rspCode={`<Button variant="primary">
  <Bell />
  <Text>Icon + Label</Text>
</Button>`}
          rspChildren={<Button variant="primary">
            <Bell />
            <Text>Icon + Label</Text>
          </Button>}
          swcCode={`<SpButton variant="primary">
  <sp-icon-bell slot="icon"></sp-icon-bell>
  Icon + Label
</SpButton>`}
          swcChildren={<SpButton variant="primary">
            <SpIconBell slot="icon"></SpIconBell>
            Icon + Label
          </SpButton>}
        />
        <CodeExample
          title="Event"
          rspCode={`<Button variant="primary" onPress={() => setCount(c => c + 1)}>
  {count} Dogs
</Button>`}
          rspChildren={<Button variant="primary" onPress={() => setCount(c => c + 1)}>
            {count} Dogs
          </Button>}
          swcCode={`<SpButton variant="primary" click={() => setCount(c => c + 1)}>
  {count} Dogs
</SpButton>`}
          swcChildren={<SpButton variant="primary" click={() => setCount(c => c + 1)}>{count} Dogs</SpButton>}
        />
        <CodeExample
          title="Quiet"
          rspCode={`<Button variant="primary" isQuiet>
  Quiet
</Button>`}
          rspChildren={<Button variant="primary" isQuiet>
            Quiet
          </Button>}
          swcCode={`N/A`}
        />

        <CodeExample
          title="Disabled"
          rspCode={`<Button variant="primary" isDisabled>
  Disabled
</Button>`}
          rspChildren={<Button variant="primary" isDisabled>
            Disabled
          </Button>}
          swcCode={`<SpButton variant="primary" disabled>
  Disabled
</SpButton>`}
          swcChildren={<SpButton variant="primary" disabled>
            Disabled
          </SpButton>}
        />
      </Content>
    </>
  )
}
