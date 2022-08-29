import { Content, Flex, Heading, Item, Keyboard, Text } from "@adobe/react-spectrum";
import { ActionMenu, Section } from "@react-spectrum/menu";
import { Key, useState } from "react";
import CodeExample from "@components/CodeExample";
import Cut from '@spectrum-icons/workflow/Cut';
import Copy from '@spectrum-icons/workflow/Copy';
import Paste from '@spectrum-icons/workflow/Paste';
import { SpIconCut} from "@swc-nextjs/icon-workflows/IconCut";
import { SpIconCopy } from "@swc-nextjs/icon-workflows/IconCopy";
import { SpIconPaste } from "@swc-nextjs/icon-workflows/IconPaste";
import { SpActionMenu } from "@swc-nextjs/action-menu";
import { SpMenuGroup, SpMenuItem } from "@swc-nextjs/menu";

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
        <CodeExample
          title="Base"
          rspCode={`<ActionMenu>
  <Item>Cut</Item>
  <Item>Copy</Item>
  <Item>Paste</Item>
</ActionMenu>`}
          rspChildren={<ActionMenu>
            <Item>Cut</Item>
            <Item>Copy</Item>
            <Item>Paste</Item>
          </ActionMenu>}
          swcCode={`<SpActionMenu label="More Actions" change={(e: any) => e.stopPropagation()}>
  <SpMenuItem>Cut</SpMenuItem>
  <SpMenuItem>Copy</SpMenuItem>
  <SpMenuItem>Paste</SpMenuItem>
</SpActionMenu>`}
          swcChildren={
            <SpActionMenu label="More Actions" change={(e: any) => e.stopPropagation()}>
              <SpMenuItem>Cut</SpMenuItem>
              <SpMenuItem>Copy</SpMenuItem>
              <SpMenuItem>Paste</SpMenuItem>
            </SpActionMenu>
          }
        />
        <CodeExample
          title="Programmatically populated"
          rspCode={`<ActionMenu items={actionMenuItems}>
  {/* @ts-ignore */}
  {(item: ItemData) => <Item key={item.name}>{item.name}</Item>}
</ActionMenu>`}
          rspChildren={<ActionMenu items={actionMenuItems}>
            {(item: ItemData) => <Item key={item.name}>{item.name}</Item>}
          </ActionMenu>}
          swcCode={`<SpActionMenu label="More Action" change={(e: any) => e.stopPropagation()}>
  {actionMenuItems.map((item: any) =>
    <SpMenuItem key={item.name}>{item.name}</SpMenuItem>)}
</SpActionMenu>`}
          swcChildren={
            <SpActionMenu label="More Action" change={(e: any) => e.stopPropagation()}>
              {actionMenuItems.map((item: any) =>
                <SpMenuItem key={item.name}>{item.name}</SpMenuItem>)}
            </SpActionMenu>
          }
        />
        <CodeExample
          title="onAction Event"
          rspCode={`<ActionMenu onAction={setAction}>
  <Item key="cut">Cut</Item>
  <Item key="copy">Copy</Item>
  <Item key="paste">Paste</Item>
</ActionMenu>
<Heading level={4}>Action: {action}</Heading>`}
          rspChildren={
            <>
              <ActionMenu onAction={setAction}>
                <Item key="cut">Cut</Item>
                <Item key="copy">Copy</Item>
                <Item key="paste">Paste</Item>
              </ActionMenu>
              <Heading level={4}>Action: {action}</Heading>
            </>
          }
        />
        <CodeExample
          title="Section/Group"
          rspCode={`<ActionMenu>
  <Section title="File">
    <Item key="new">New</Item>
    <Item key="open">Open...</Item>
  </Section>
  <Section title="Save">
    <Item key="save">Save</Item>
    <Item key="saveAs">Save As...</Item>
    <Item key="saveAll">Save All</Item>
  </Section>
</ActionMenu>`}
          rspChildren={<ActionMenu>
            <Section title="File">
              <Item key="new">New</Item>
              <Item key="open">Open...</Item>
            </Section>
            <Section title="Save">
              <Item key="save">Save</Item>
              <Item key="saveAs">Save As...</Item>
              <Item key="saveAll">Save All</Item>
            </Section>
          </ActionMenu>}
          swcChildren={
            <SpActionMenu>
              <SpMenuGroup
                id="group-1"
                selects="single"
              >
                <span slot="header">New York</span>
                <SpMenuItem key="new">New</SpMenuItem>
                <SpMenuItem key="open">Open...</SpMenuItem>
              </SpMenuGroup>
              <SpMenuGroup
                id="group-2"
                selects="single"
              >
                <span slot="header">Save</span>
                <SpMenuItem key="save">Save</SpMenuItem>
                <SpMenuItem key="saveAs">Save As...</SpMenuItem>
                <SpMenuItem key="saveAll">Save All</SpMenuItem>
              </SpMenuGroup>
            </SpActionMenu>
          }
        />
        <CodeExample
          title="Programmatically populated with section"
          rspChildren={<ActionMenu
            items={openWindows}>
            {(item: any) => (
              <Section items={item.children} title={item.name}>
                {(item: any) => <Item>{item.name}</Item>}
              </Section>
            )}
          </ActionMenu>}
          rspCode={`<ActionMenu
  items={openWindows}>
  {(item: any) => (
    <Section items={item.children} title={item.name}>
      {(item: any) => <Item>{item.name}</Item>}
    </Section>
  )}
</ActionMenu>`}
          swcCode="N/A"
        />
        <CodeExample
          title="Icon"
          rspCode={`<ActionMenu>
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
</ActionMenu>`}
          rspChildren={<ActionMenu>
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
          </ActionMenu>}
          swcChildren={<SpActionMenu>
            <SpMenuItem key="cut">
              <SpIconCut slot="icon" />
              Cut
              <span>⌘X</span>
            </SpMenuItem>
            <SpMenuItem key="copy">
              <SpIconCopy slot="icon" />
              Copy
              <span>⌘C</span>
            </SpMenuItem>
            <SpMenuItem key="paste">
              <SpIconPaste slot="icon" />
              Paste
              <span>⌘V</span>
            </SpMenuItem>
          </SpActionMenu>}
          swcCode={`<SpActionMenu>
  <SpMenuItem key="cut">
    <SpIconCut slot="icon" />
    Cut
    <span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;⌘X</span>
  </SpMenuItem>
  <SpMenuItem key="copy">
    <SpIconCopy slot="icon" />
    Copy
    <span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;⌘C</span>
  </SpMenuItem>
  <SpMenuItem key="paste">
    <SpIconPaste slot="icon" />
    Paste
    <span>&#xa0;&#xa0;&#xa0;&#xa0;⌘V</span>
  </SpMenuItem>
</SpActionMenu>`}
        />
        <CodeExample
          title="Embedded programmatically populated"
          rspCode={`<ActionMenu
  isQuiet
  items={[
    { name: 'Cut', id: 'cut' },
    { name: 'Copy', id: 'copy' },
    { name: 'Paste', id: 'paste' }
  ]}>
  {(item: any) => <Item>{item.name}</Item>}
</ActionMenu>`}
          rspChildren={<ActionMenu
            isQuiet
            items={[
              { name: 'Cut', id: 'cut' },
              { name: 'Copy', id: 'copy' },
              { name: 'Paste', id: 'paste' }
            ]}>
            {(item: any) => <Item>{item.name}</Item>}
          </ActionMenu>}
          swcCode="N/A"
        />
        <CodeExample
          title="Embedded programmatically populated with disabled item"
          rspChildren={<ActionMenu
            items={[
              { name: 'Undo', id: 'undo' },
              { name: 'Redo', id: 'redo' },
              { name: 'Cut', id: 'cut' },
              { name: 'Copy', id: 'copy' },
              { name: 'Paste', id: 'paste' }
            ]}
            disabledKeys={['redo', 'paste']}>
            {(item: any) => <Item>{item.name}</Item>}
          </ActionMenu>}
          rspCode={`<ActionMenu
  items={[
    { name: 'Undo', id: 'undo' },
    { name: 'Redo', id: 'redo' },
    { name: 'Cut', id: 'cut' },
    { name: 'Copy', id: 'copy' },
    { name: 'Paste', id: 'paste' }
  ]}
  disabledKeys={['redo', 'paste']}>
  {(item: any) => <Item>{item.name}</Item>}
</ActionMenu>`}
          swcCode="N/A"
        />
        <CodeExample
          title="Align and direction"
          rspChildren={<Flex gap="size-100">
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
          </Flex>}
          rspCode={`<Flex gap="size-100">
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
</Flex>`}
          swcCode="N/A"
        />
        <CodeExample
          title="Flipping"
          rspCode={`<Flex gap="size-100">
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
</Flex>`}
          rspChildren={<Flex gap="size-100">
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
          </Flex>}
          swcCode="N/A"
        />
      </Content>
    </>
  )
}
