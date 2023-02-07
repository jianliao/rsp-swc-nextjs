import { ActionGroup, Content, Heading, Item, Text } from '@adobe/react-spectrum';
import { Key, useState } from 'react';
import { Selection } from '@react-types/shared';
import Draw from '@spectrum-icons/workflow/Draw';
import Copy from '@spectrum-icons/workflow/Copy';
import Delete from '@spectrum-icons/workflow/Delete';
import Gradient from '@spectrum-icons/workflow/Gradient';
import Book from '@spectrum-icons/workflow/Book';
import Table from '@spectrum-icons/workflow/Table';
import CodeExample from '@components/CodeExample';
import { SpIconDraw } from '@swc-next/icons-workflow/IconDraw';
import { SpIconCopy } from '@swc-next/icons-workflow/IconCopy';
import { SpIconDelete } from '@swc-next/icons-workflow/IconDelete';
import { SpIconGradient } from '@swc-next/icons-workflow/IconGradient';
import { SpIconBook } from '@swc-next/icons-workflow/IconBook';
import { SpIconTable } from '@swc-next/icons-workflow/IconTable';
import { SpActionGroup } from '@swc-next/action-group';
import { SpActionButton } from '@swc-next/action-button';

export default function ActionGroupPage() {
  const [action, setAction] = useState<Key>();
  const [swcAction, setSwcAction] = useState<string[]>([]);
  const [selected, setSelected] = useState<Selection>(new Set(['grid']));
  const [swcSelected, setSwcSelected] = useState<string[]>(['grid']);
  const [multiSelected, setMultiSelected] = useState<Selection>(new Set([]));
  const [swcmMultiSelected, setSwcMultiSelected] = useState<string[]>([]);
  const items = [
    { label: 'React', name: 'React' },
    { label: 'Add', name: 'Add' },
    { label: 'Delete', name: 'Delete' },
  ];
  const changed = (e: any) => {
    e.stopPropagation();
    setSwcAction(e.target.selected);
  };
  const handleSingleSelectChanged = (e: any) => {
    e.stopPropagation();
    setSwcSelected(e.target.selected);
  };
  const handleMultiSelected = (e: any) => {
    e.stopPropagation();
    setSwcMultiSelected(e.target.selected);
  };
  return (
    <>
      <Heading level={1}>Action Group</Heading>
      <Content>
        <CodeExample
          title="Base"
          rspCode={`<ActionGroup selectionMode="single" onAction={setAction}>
  <Item key="add">Add</Item>
  <Item key="delete">Delete</Item>
  <Item key="edit">Edit</Item>
</ActionGroup>
<Heading level={4}>Action: {action}</Heading>`}
          rspChildren={
            <>
              <ActionGroup selectionMode="single" onAction={setAction}>
                <Item key="add">Add</Item>
                <Item key="delete">Delete</Item>
                <Item key="edit">Edit</Item>
              </ActionGroup>
              <Heading level={4}>Action: {action}</Heading>
            </>
          }
          swcCode={`<SpActionGroup selects="single" selected={swcAction} change={changed}>
  <SpActionButton value="add">
    Add
  </SpActionButton>
  <SpActionButton value="delete">
    Delete
  </SpActionButton>
  <SpActionButton value="edit">
    Edit
  </SpActionButton>
</SpActionGroup>
<Heading level={4}>Action: {swcAction}</Heading>`}
          swcChildren={
            <>
              <SpActionGroup selects="single" selected={swcAction} change={changed}>
                <SpActionButton value="add">Add</SpActionButton>
                <SpActionButton value="delete">Delete</SpActionButton>
                <SpActionButton value="edit">Edit</SpActionButton>
              </SpActionGroup>
              <Heading level={4}>Action: {swcAction}</Heading>
            </>
          }
        />
        <CodeExample
          title="Programmatically populated"
          rspCode={`<ActionGroup items={items}>
  {item => <Item key={item.name}>{item.label}</Item>}
</ActionGroup>`}
          rspChildren={<ActionGroup items={items}>{(item) => <Item key={item.name}>{item.label}</Item>}</ActionGroup>}
          swcCode={`<SpActionGroup>
  {items.map(item => <SpActionButton key={item.name} value={item.name}>
    {item.label}
  </SpActionButton>
  )}
</SpActionGroup>`}
          swcChildren={
            <SpActionGroup>
              {items.map((item) => (
                <SpActionButton key={item.name} value={item.name}>
                  {item.label}
                </SpActionButton>
              ))}
            </SpActionGroup>
          }
        />
        <CodeExample
          title="Icon and label"
          rspCode={`<ActionGroup>
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
</ActionGroup>`}
          rspChildren={
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
          }
          swcCode={`<SpActionGroup>
  <SpActionButton value="edit">
    <SpIconDraw slot="icon" />
    Edit
  </SpActionButton>
  <SpActionButton value="copy">
    <SpIconCopy slot="icon" />
    Copy
  </SpActionButton>
  <SpActionButton value="delete">
    <SpIconDelete slot="icon" />
    Delete
  </SpActionButton>
</SpActionGroup>`}
          swcChildren={
            <SpActionGroup>
              <SpActionButton value="edit">
                <SpIconDraw slot="icon" />
                Edit
              </SpActionButton>
              <SpActionButton value="copy">
                <SpIconCopy slot="icon" />
                Copy
              </SpActionButton>
              <SpActionButton value="delete">
                <SpIconDelete slot="icon" />
                Delete
              </SpActionButton>
            </SpActionGroup>
          }
        />
        <CodeExample
          title="Icon only"
          rspCode={`<ActionGroup buttonLabelBehavior="hide">
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
</ActionGroup>`}
          rspChildren={
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
          }
          swcCode={`<SpActionGroup>
  <SpActionButton value="edit">
    <SpIconDraw slot="icon" />
  </SpActionButton>
  <SpActionButton value="copy">
    <SpIconCopy slot="icon" />
  </SpActionButton>
  <SpActionButton value="delete">
    <SpIconDelete slot="icon" />
  </SpActionButton>
</SpActionGroup>`}
          swcChildren={
            <SpActionGroup>
              <SpActionButton value="edit">
                <SpIconDraw slot="icon" />
              </SpActionButton>
              <SpActionButton value="copy">
                <SpIconCopy slot="icon" />
              </SpActionButton>
              <SpActionButton value="delete">
                <SpIconDelete slot="icon" />
              </SpActionButton>
            </SpActionGroup>
          }
        />
        <CodeExample
          title="Single selection event"
          rspCode={`<ActionGroup
  selectionMode="single"
  selectedKeys={selected}
  onSelectionChange={setSelected}
>
  <Item key="grid">Grid view</Item>
  <Item key="list">List view</Item>
  <Item key="gallery">Gallery view</Item>
</ActionGroup>
<Heading level={4}>Current selection (controlled): {[...Array.from(selected)]}</Heading>`}
          rspChildren={
            <>
              <ActionGroup selectionMode="single" selectedKeys={selected} onSelectionChange={setSelected}>
                <Item key="grid">Grid view</Item>
                <Item key="list">List view</Item>
                <Item key="gallery">Gallery view</Item>
              </ActionGroup>
              <Heading level={4}>Current selection (controlled): {[...Array.from(selected)]}</Heading>
            </>
          }
          swcCode={`<SpActionGroup selects="single" selected={swcSelected} change={handleSingleSelectChanged}>
  <SpActionButton value="grid">
    Grid view
  </SpActionButton>
  <SpActionButton value="list">
    List view
  </SpActionButton>
  <SpActionButton value="gallery">
    Gallery view
  </SpActionButton>
</SpActionGroup>
<Heading level={4}>Current selection (controlled): {swcSelected}</Heading>`}
          swcChildren={
            <>
              <SpActionGroup selects="single" selected={swcSelected} change={handleSingleSelectChanged}>
                <SpActionButton value="grid">Grid view</SpActionButton>
                <SpActionButton value="list">List view</SpActionButton>
                <SpActionButton value="gallery">Gallery view</SpActionButton>
              </SpActionGroup>
              <Heading level={4}>Current selection (controlled): {swcSelected}</Heading>
            </>
          }
        />
        <CodeExample
          title="Multiple selection event"
          rspCode={`<ActionGroup
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
<Heading level={4}>Current (Multi) selections (controlled): {[...Array.from(selected)].join(', ')}</Heading>`}
          rspChildren={
            <>
              <ActionGroup selectionMode="multiple" selectedKeys={multiSelected} onSelectionChange={setMultiSelected}>
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
              <Heading level={4}>
                Current (Multi) selections (controlled): {[...Array.from(multiSelected)].join(', ')}
              </Heading>
            </>
          }
          swcCode={`<SpActionGroup
  selects="multiple"
  selectedKeys={multiSelected}
  change={handleMultiSelected}
>
  <SpActionButton value="gradient">
    <SpIconGradient slot="icon" />
    Gradient
  </SpActionButton>
  <SpActionButton value="book">
    <SpIconBook slot="icon" />
    Book
  </SpActionButton>
  <SpActionButton value="table">
    <SpIconTable slot="icon" />
    Table
  </SpActionButton>
</SpActionGroup>
<Heading level={4}>Current (Multi) selections (controlled): {[...Array.from(swcmMultiSelected)].join(', ')}</Heading>`}
          swcChildren={
            <>
              <SpActionGroup selects="multiple" selected={swcmMultiSelected} change={handleMultiSelected}>
                <SpActionButton value="gradient">
                  <SpIconGradient slot="icon" />
                  Gradient
                </SpActionButton>
                <SpActionButton value="book">
                  <SpIconBook slot="icon" />
                  Book
                </SpActionButton>
                <SpActionButton value="table">
                  <SpIconTable slot="icon" />
                  Table
                </SpActionButton>
              </SpActionGroup>
              <Heading level={4}>
                Current (Multi) selections (controlled): {[...Array.from(swcmMultiSelected)].join(', ')}
              </Heading>
            </>
          }
        />
      </Content>
    </>
  );
}
