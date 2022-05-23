import { ActionGroup, Content, Heading, Item, Text } from "@adobe/react-spectrum";
import { Key, useState } from "react";
import { Selection } from "@react-types/shared";
import Draw from '@spectrum-icons/workflow/Draw';
import Copy from '@spectrum-icons/workflow/Copy';
import Delete from '@spectrum-icons/workflow/Delete';
import Gradient from '@spectrum-icons/workflow/Gradient';
import Book from '@spectrum-icons/workflow/Book';
import Table from '@spectrum-icons/workflow/Table';
import CodeExample from "@components/CodeExample";

export default function ActionGroupPage() {
  const [action, setAction] = useState<Key>();
  const [selected, setSelected] = useState<Selection>(new Set(['grid']));
  const [multiSelected, setMultiSelected] = useState<Selection>(new Set([]));
  const items = [
    { label: 'React', name: 'React' },
    { label: 'Add', name: 'Add' },
    { label: 'Delete', name: 'Delete' }
  ];
  return (
    <>
      <Heading level={1}>Action Group</Heading>
      <Content>
        <CodeExample title="Base" code={`<ActionGroup onAction={setAction}>\n  <Item key="add">Add</Item>\n  <Item key="delete">Delete</Item>\n  <Item key="edit">Edit</Item>\n</ActionGroup>\n<Heading level={4}>Action: {action}</Heading>`}>
          <ActionGroup onAction={setAction}>
            <Item key="add">Add</Item>
            <Item key="delete">Delete</Item>
            <Item key="edit">Edit</Item>
          </ActionGroup>
          <Heading level={4}>Action: {action}</Heading>
        </CodeExample>
        <CodeExample title="Programmatically populated">
          <ActionGroup items={items}>
            {item => <Item key={item.name}>{item.label}</Item>}
          </ActionGroup>
        </CodeExample>
        <CodeExample title="Icon and label">
          <ActionGroup>
            <Item key="edit">
              <Draw />
              <Text>Edit</Text>
            </Item>
            <Item key="copy">
              <Copy />
              <Text>Copy</Text>
            </Item>
            <Item key="delete">
              <Delete />
              <Text>Delete</Text>
            </Item>
          </ActionGroup>
        </CodeExample>
        <CodeExample title="Icon only">
          <ActionGroup buttonLabelBehavior="hide">
            <Item key="edit">
              <Draw />
              <Text>Edit</Text>
            </Item>
            <Item key="copy">
              <Copy />
              <Text>Copy</Text>
            </Item>
            <Item key="delete">
              <Delete />
              <Text>Delete</Text>
            </Item>
          </ActionGroup>
        </CodeExample>
        <CodeExample title="Single selection mode">
          <ActionGroup selectionMode="single" defaultSelectedKeys={['list']}>
            <Item key="grid">Grid view</Item>
            <Item key="list">List view</Item>
            <Item key="gallery">Gallery view</Item>
          </ActionGroup>
        </CodeExample>
        <CodeExample title="Single selection event">
          <ActionGroup
            selectionMode="single"
            selectedKeys={selected}
            onSelectionChange={setSelected}
          >
            <Item key="grid">Grid view</Item>
            <Item key="list">List view</Item>
            <Item key="gallery">Gallery view</Item>
          </ActionGroup>
          <Heading level={4}>Current selection (controlled): {[...Array.from(selected)]}</Heading>
        </CodeExample>
        <CodeExample title="Multiple selection event">
          <ActionGroup
            selectionMode="multiple"
            selectedKeys={multiSelected}
            onSelectionChange={setMultiSelected}
          >
            <Item key="gradient">
              <Gradient />
              <Text>Gradient</Text>
            </Item>
            <Item key="book">
              <Book />
              <Text>Book</Text>
            </Item>
            <Item key="table">
              <Table />
              <Text>Table</Text>
            </Item>
          </ActionGroup>
          <Heading level={4}>Current (Multi) selections (controlled): {[...Array.from(selected)].join(', ')}</Heading>
        </CodeExample>
      </Content>
    </>
  )
}
