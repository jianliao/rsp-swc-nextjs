import { Content, Flex, Heading, Item, Keyboard, Text } from "@adobe/react-spectrum";
import { ActionMenu, Section } from "@react-spectrum/menu";
import { Key, useState } from "react";
import CodeExample from "@components/CodeExample";
import Cut from '@spectrum-icons/workflow/Cut';
import Copy from '@spectrum-icons/workflow/Copy';
import Paste from '@spectrum-icons/workflow/Paste';

type ItemData = {
  name: string
}

export default function ActionMenuPage() {

  const actionMenuItems: Array<ItemData> = [
    { name: 'Cut' },
    { name: 'Copy' },
    { name: 'Paste' },
    { name: 'Select All' }
  ];
  const [action, setAction] = useState<Key>('');
  const openWindows = [
    {
      name: 'Reversion',
      id: 'reversion',
      children: [
        { id: 'undo', name: 'Undo' },
        { id: 'redo', name: 'Redo' }
      ]
    },
    {
      name: 'Clipboard',
      id: 'clipboard',
      children: [
        { id: 'cut', name: 'Cut' },
        { id: 'copy', name: 'Copy' },
        { id: 'paste', name: 'Paste' }
      ]
    }
  ];
  return (
    <>
      <Heading level={1}>Action Menu</Heading>
      <Content>
        <CodeExample title="Base">
          <ActionMenu>
            <Item>Cut</Item>
            <Item>Copy</Item>
            <Item>Paste</Item>
          </ActionMenu>
        </CodeExample>
        <CodeExample title="Programmatically populated">
          <ActionMenu items={actionMenuItems}>
            {/* @ts-ignore */}
            {(item: ItemData) => <Item key={item.name}>{item.name}</Item>}
          </ActionMenu>
        </CodeExample>
        <CodeExample title="onAction Event">
          <ActionMenu onAction={setAction}>
            <Item key="cut">Cut</Item>
            <Item key="copy">Copy</Item>
            <Item key="paste">Paste</Item>
          </ActionMenu>
          <Heading level={4}>Action: {action}</Heading>
        </CodeExample>
        <CodeExample title="Section">
          <ActionMenu>
            <Section title="File">
              <Item key="new">New</Item>
              <Item key="open">Open...</Item>
            </Section>
            <Section title="Save">
              <Item key="save">Save</Item>
              <Item key="saveAs">Save As...</Item>
              <Item key="saveAll">Save All</Item>
            </Section>
          </ActionMenu>
        </CodeExample>
        <CodeExample title="Programmatically populated with section">
          <ActionMenu
            items={openWindows}>
            {(item: any) => (
              <Section items={item.children} title={item.name}>
                {(item: any) => <Item>{item.name}</Item>}
              </Section>
            )}
          </ActionMenu>
        </CodeExample>
        <CodeExample title="Icon">
          <ActionMenu>
            <Item key="cut" textValue="cut">
              <Cut size="S" />
              <Text>Cut</Text>
              <Keyboard>⌘X</Keyboard>
            </Item>
            <Item key="copy" textValue="copy">
              <Copy size="S" />
              <Text>Copy</Text>
              <Keyboard>⌘C</Keyboard>
            </Item>
            <Item key="paste" textValue="paste">
              <Paste size="S" />
              <Text>Paste</Text>
              <Keyboard>⌘V</Keyboard>
            </Item>
          </ActionMenu>
        </CodeExample>
        <CodeExample title="Embedded programmatically populated">
          <ActionMenu
            isQuiet
            items={[
              { name: 'Cut', id: 'cut' },
              { name: 'Copy', id: 'copy' },
              { name: 'Paste', id: 'paste' }
            ]}>
            {(item: any) => <Item>{item.name}</Item>}
          </ActionMenu>
        </CodeExample>
        <CodeExample title="Embedded programmatically populated with disabled item">
          <ActionMenu
            items={[
              { name: 'Undo', id: 'undo' },
              { name: 'Redo', id: 'redo' },
              { name: 'Cut', id: 'cut' },
              { name: 'Copy', id: 'copy' },
              { name: 'Paste', id: 'paste' }
            ]}
            disabledKeys={['redo', 'paste']}>
            {(item: any) => <Item>{item.name}</Item>}
          </ActionMenu>
        </CodeExample>
        <CodeExample title="Align and direction">
          <Flex gap="size-100">
            <ActionMenu align="start">
              <Item key="cut">Cut</Item>
              <Item key="copy">Copy</Item>
              <Item key="paste">Paste</Item>
            </ActionMenu>
            <ActionMenu align="end" direction="top" shouldFlip={false}>
              <Item key="cut">Cut</Item>
              <Item key="copy">Copy</Item>
              <Item key="paste">Paste</Item>
            </ActionMenu>
            <ActionMenu direction="start" align="start">
              <Item key="cut">Cut</Item>
              <Item key="copy">Copy</Item>
              <Item key="paste">Paste</Item>
            </ActionMenu>
            <ActionMenu direction="end" align="end">
              <Item key="cut">Cut</Item>
              <Item key="copy">Copy</Item>
              <Item key="paste">Paste</Item>
            </ActionMenu>
          </Flex>
        </CodeExample>
        <CodeExample title="Flipping">
          <Flex gap="size-100">
            <ActionMenu shouldFlip>
              <Item key="cut">Cut</Item>
              <Item key="copy">Copy</Item>
              <Item key="paste">Paste</Item>
            </ActionMenu>
            <ActionMenu shouldFlip={false}>
              <Item key="cut">Cut</Item>
              <Item key="copy">Copy</Item>
              <Item key="paste">Paste</Item>
            </ActionMenu>
          </Flex>
        </CodeExample>
      </Content>
    </>
  )
}
