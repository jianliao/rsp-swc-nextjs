import { LogicButton, Content, Heading, Well } from "@adobe/react-spectrum";
import { useState } from "react";

export default function ButtonPage() {

  let [variant, setVariant] = useState<any>('Or');
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
            variant={variant.toLowerCase()}
            onPress={() => setVariant(variant === 'Or' ? 'And' : 'Or')}
          >
            {variant}
          </LogicButton>
        </Well>
      </Content>
    </>
  )
}
