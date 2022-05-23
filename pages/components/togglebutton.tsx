import { ToggleButton, Content, Heading, Text, Flex, View } from "@adobe/react-spectrum";
import { useState } from "react";
import Pin from '@spectrum-icons/workflow/PinOff';
import Brush from '@spectrum-icons/workflow/Brush';
import Star from '@spectrum-icons/workflow/Star';
import CodeExample from "@components/CodeExample";

export default function ButtonPage() {
  let [isSelected, setSelected] = useState(false);
  return (
    <>
      <Heading level={1}>Toggle Button</Heading>
      <Content>
        <CodeExample title="Icon + Label">
          <ToggleButton>
            <Pin />
            <Text>Icon + Label</Text>
          </ToggleButton>
        </CodeExample>
        <CodeExample title="Icon only">
          <ToggleButton aria-label="Icon only">
            <Brush />
          </ToggleButton>
        </CodeExample>
        <CodeExample title="Emphasized">
          <ToggleButton
            isEmphasized
            isSelected={isSelected}
            onChange={setSelected}
            aria-label="Favorite">
            <Star />
          </ToggleButton>
        </CodeExample>
        <CodeExample title="Quiet">
          <ToggleButton isQuiet>
            <Pin />
          </ToggleButton>
        </CodeExample>
        <CodeExample title="Disabled">
          <ToggleButton isDisabled>
            <Pin />
          </ToggleButton>
        </CodeExample>
        <CodeExample title="Emphasized and default selected">
          <ToggleButton isEmphasized defaultSelected>
            Pin
          </ToggleButton>
        </CodeExample>
        <CodeExample title="Background Color">
          <Flex wrap gap="size-250">
            <View
              backgroundColor="static-seafoam-700"
              padding="size-500"
            >
              <ToggleButton staticColor="white">
                <Pin />
                <Text>Pin</Text>
              </ToggleButton>
            </View>
            <View
              backgroundColor="static-yellow-400"
              padding="size-500"
            >
              <ToggleButton
                staticColor="black"
                isQuiet
                defaultSelected
              >
                <Pin />
                <Text>Pin</Text>
              </ToggleButton>
            </View>
          </Flex>
        </CodeExample>
      </Content>
    </>
  )
}
