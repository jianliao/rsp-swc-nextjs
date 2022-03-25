import { ActionGroup, Content, Heading, Item, Text, Well } from "@adobe/react-spectrum";
import { useState } from "react";
import Draw from '@spectrum-icons/workflow/Draw';
import Copy from '@spectrum-icons/workflow/Copy';
import Delete from '@spectrum-icons/workflow/Delete';
import Gradient from '@spectrum-icons/workflow/Gradient';
import Book from '@spectrum-icons/workflow/Book';
import Table from '@spectrum-icons/workflow/Table';

export default function ActionGroupPage() {
  let [action, setAction] = useState<any>();
  let [selected, setSelected] = useState<any>(new Set(['grid']));
  let [multiSelected, setMultiSelected] = useState<any>(new Set([]));
  const items = [
    { label: 'React', name: 'React' },
    { label: 'Add', name: 'Add' },
    { label: 'Delete', name: 'Delete' }
  ];
  return (
    <>
      <Heading level={1}>Action Group</Heading>
      <Content>
        <Well>
          <ActionGroup onAction={setAction}>
            <Item key="add">Add</Item>
            <Item key="delete">Delete</Item>
            <Item key="edit">Edit</Item>
          </ActionGroup>
          <p>Action: {action}</p>
        </Well>
        <Well>
          <ActionGroup items={items}>
            {item => <Item key={item.name}>{item.label}</Item>}
          </ActionGroup>
        </Well>
        <Well>
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
        </Well>
        <Well>
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
        </Well>
        <Well>
          <ActionGroup selectionMode="single" defaultSelectedKeys={['list']}>
            <Item key="grid">Grid view</Item>
            <Item key="list">List view</Item>
            <Item key="gallery">Gallery view</Item>
          </ActionGroup>
        </Well>
        <Well>
          <ActionGroup
            selectionMode="single"
            selectedKeys={selected}
            onSelectionChange={setSelected}
          >
            <Item key="grid">Grid view</Item>
            <Item key="list">List view</Item>
            <Item key="gallery">Gallery view</Item>
          </ActionGroup>
          <p>Current selection (controlled): {[...selected]}</p>
        </Well>
        <Well>
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
          <p>Current (Multi) selections (controlled): {[...multiSelected].join(', ')}</p>
        </Well>
      </Content>
    </>
  )
}
