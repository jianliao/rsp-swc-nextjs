import { ToggleButton, Content, Heading, Text, Well, Flex, View } from "@adobe/react-spectrum";
import { useState } from "react";
import Pin from '@spectrum-icons/workflow/PinOff';
import Brush from '@spectrum-icons/workflow/Brush';
import Star from '@spectrum-icons/workflow/Star';

export default function ButtonPage() {
  let [isSelected, setSelected] = useState(false);
  return (
    <>
      <Heading level={1}>Toggle Button</Heading>
      <Content>
        <Well>
          <ToggleButton>
            <Pin />
            <Text>Icon + Label</Text>
          </ToggleButton>
        </Well>
        <Well>
          <ToggleButton aria-label="Icon only">
            <Brush />
          </ToggleButton>
        </Well>
        <Well>
          <ToggleButton
            isEmphasized
            isSelected={isSelected}
            onChange={setSelected}
            aria-label="Favorite">
            <Star />
          </ToggleButton>
        </Well>
        <Well>
          <ToggleButton isQuiet>
            <Pin />
          </ToggleButton>
        </Well>
        <Well>
          <ToggleButton isDisabled>
            <Pin />
          </ToggleButton>
        </Well>
        <Well>
          <ToggleButton isEmphasized defaultSelected>
            Pin
          </ToggleButton>
        </Well>
        <Well>
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
        </Well>
      </Content>
    </>
  )
}
