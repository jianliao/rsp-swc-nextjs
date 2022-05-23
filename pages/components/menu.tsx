import { ActionButton, Content, Heading, Item, Menu, MenuTrigger } from "@adobe/react-spectrum";
import { Key, useState } from "react";
import { Selection } from "@react-types/shared";
import CodeExample from "@components/CodeExample";

export default function MenuPage() {
  const menuItems = [
    { name: 'Cut' },
    { name: 'Copy' },
    { name: 'Paste' },
    { name: 'Replace' }
  ];
  const [action, setAction] = useState<Key>('');
  const [selected, setSelected] = useState<Selection>(new Set(['middle']));
  const [multiSelected, setMultiSelected] = useState<Selection>(new Set(['Sidebar']));
  return (
    <>
      <Heading level={1}>Menu</Heading>
      <Content>
        <CodeExample title="Basic">
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
        <CodeExample title="Programmatically populated">
          <MenuTrigger>
            <ActionButton>
              Edit
            </ActionButton>
            <Menu items={menuItems}>
              {item => <Item key={item.name}>{item.name}</Item>}
            </Menu>
          </MenuTrigger>
        </CodeExample>
        <CodeExample title="Events">
          <MenuTrigger>
            <ActionButton>
              Edit
            </ActionButton>
            <Menu onAction={setAction}>
              <Item key="cut">Cut</Item>
              <Item key="copy">Copy</Item>
              <Item key="paste">Paste</Item>
            </Menu>
          </MenuTrigger>
          <Heading level={4}>Action: {action}</Heading>
        </CodeExample>
        <CodeExample title="Selection">
          <MenuTrigger>
            <ActionButton>
              Align
            </ActionButton>
            <Menu
              selectionMode="single"
              selectedKeys={selected}
              onSelectionChange={setSelected}
            >
              <Item key="left">Left</Item>
              <Item key="middle">Middle</Item>
              <Item key="right">Right</Item>
            </Menu>
          </MenuTrigger>
          <Heading level={4}>Current selection (controlled): {Array.from(selected)}</Heading>
        </CodeExample>
        <CodeExample title="Multiple Selection">
          <MenuTrigger closeOnSelect={false}>
            <ActionButton>
              Show
            </ActionButton>
            <Menu
              selectionMode="multiple"
              selectedKeys={multiSelected}
              onSelectionChange={setMultiSelected}
            >
              <Item key="Sidebar">Sidebar</Item>
              <Item key="Searchbar">Searchbar</Item>
              <Item key="Tools">Tools</Item>
              <Item key="Console">Console</Item>
            </Menu>
          </MenuTrigger>
          <Heading level={4}>Current selection (controlled): {Array.from(multiSelected).join(', ')}</Heading>
        </CodeExample>
      </Content>
    </>
  )
}
