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
        <CodeExample title="Variant - And">
          <LogicButton variant="and">And</LogicButton>
        </CodeExample>
        <CodeExample title="Variant - Or">
          <LogicButton variant="or">Or</LogicButton>
        </CodeExample>
        <CodeExample title="onPress event">
          <LogicButton
            variant={variant}
            onPress={() => setVariant(variant === 'or' ? 'and' : 'or')}
          >
            {capitalizedFirst(variant)}
          </LogicButton>
        </CodeExample>
      </Content>
    </>
  )
}
