import { LogicButton, Content, Heading } from "@adobe/react-spectrum";
import { useState } from "react";
import CodeExample from "@components/CodeExample";

function capitalizedFirst(s: string) {
  return (s !== null && s.length > 0) ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

export default function ButtonPage() {
  const [variant, setVariant] = useState<'or' | 'and'>('or');
  return (
    <>
      <Heading level={1}>Button Group</Heading>
      <Content>
        <CodeExample title="Variant - And"
          rspCode={`<LogicButton variant="and">And</LogicButton>`}
          rspChildren={<LogicButton variant="and">And</LogicButton>}
          swcCode="N/A"
        />
        <CodeExample title="Variant - Or"
          rspCode={`<LogicButton variant="or">Or</LogicButton>`}
          rspChildren={<LogicButton variant="or">Or</LogicButton>}
          swcCode="N/A"
        />
        <CodeExample title="onPress event"
          rspCode={`<LogicButton
  variant={variant}
  onPress={() => setVariant(variant === 'or' ? 'and' : 'or')}
>
  {capitalizedFirst(variant)}
</LogicButton>`}
          rspChildren={<LogicButton
            variant={variant}
            onPress={() => setVariant(variant === 'or' ? 'and' : 'or')}
          >
            {capitalizedFirst(variant)}
          </LogicButton>}
          swcCode="N/A"
        />
      </Content>
    </>
  )
}
