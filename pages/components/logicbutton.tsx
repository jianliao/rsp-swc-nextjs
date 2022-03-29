import { LogicButton, Content, Heading, Well } from "@adobe/react-spectrum";
import { useState } from "react";

function capitalizedFirst(s: string) {
  return (s !== null && s.length > 0) ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

export default function ButtonPage() {
  const [variant, setVariant] = useState<'or' | 'and'>('or');
  return (
    <>
      <Heading level={1}>Button Group</Heading>
      <Content>
        <Well>
          <LogicButton variant="and">And</LogicButton>
        </Well>
        <Well>
          <LogicButton variant="or">Or</LogicButton>
        </Well>
        <Well>
          <LogicButton
            variant={variant}
            onPress={() => setVariant(variant === 'or' ? 'and' : 'or')}
          >
            {capitalizedFirst(variant)}
          </LogicButton>
        </Well>
      </Content>
    </>
  )
}
