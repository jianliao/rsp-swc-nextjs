import { ActionButton, Content, Heading, Item, Menu, MenuTrigger, Text } from "@adobe/react-spectrum";
import CodeExample from "@components/CodeExample";
import CloneStamp from '@spectrum-icons/workflow/CloneStamp';
import Crop from '@spectrum-icons/workflow/Crop';
import CropRotate from '@spectrum-icons/workflow/CropRotate';
import Slice from '@spectrum-icons/workflow/Slice';

export default function MenuTriggerPage() {
  return (
    <>
      <Heading level={1}>Menu Trigger</Heading>
      <Content>
        <CodeExample title="Basic" code={`<MenuTrigger>
  <ActionButton>
    Edit
  </ActionButton>
  <Menu>
    <Item>Cut</Item>
    <Item>Copy</Item>
    <Item>Paste</Item>
  </Menu>
</MenuTrigger>`}>
          <MenuTrigger>
            <ActionButton>
              Edit
            </ActionButton>
            <Menu onAction={key => alert(key)}>
              <Item key="cut">Cut</Item>
              <Item key="copy">Copy</Item>
              <Item key="paste">Paste</Item>
              <Item key="replace">Replace</Item>
            </Menu>
          </MenuTrigger>
        </CodeExample>
        <CodeExample title="Long press" code={`<MenuTrigger trigger="longPress">
  <ActionButton aria-label="Crop tool" onPress={() => alert('Cropping!')}>
    <Crop />
  </ActionButton>
  <Menu>
    <Item textValue="Crop Rotate">
      <CropRotate />
      <Text>Crop Rotate</Text>
    </Item>
    <Item textValue="Slice">
      <Slice />
      <Text>Slice</Text>
    </Item>
    <Item textValue="Clone stamp">
      <CloneStamp />
      <Text>Clone Stamp</Text>
    </Item>
  </Menu>
</MenuTrigger>`}>
          <MenuTrigger trigger="longPress">
            <ActionButton aria-label="Crop tool" onPress={() => alert('Cropping!')}>
              <Crop />
            </ActionButton>
            <Menu>
              <Item textValue="Crop Rotate">
                <CropRotate />
                <Text>Crop Rotate</Text>
              </Item>
              <Item textValue="Slice">
                <Slice />
                <Text>Slice</Text>
              </Item>
              <Item textValue="Clone stamp">
                <CloneStamp />
                <Text>Clone Stamp</Text>
              </Item>
            </Menu>
          </MenuTrigger>
        </CodeExample>
      </Content>
    </>
  )
}
