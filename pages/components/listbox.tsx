import { Content, Heading, Item, ListBox, Section, Text } from '@adobe/react-spectrum';
import { useState } from 'react';
import { Selection } from '@react-types/shared';
import Book from '@spectrum-icons/workflow/Book';
import Draw from '@spectrum-icons/workflow/Draw';
import BulkEditUsers from '@spectrum-icons/workflow/BulkEditUsers';

import CodeExample from '@components/CodeExample';

export default function ListBoxPage() {
  const options = [
    { id: 1, name: 'Aardvark' },
    { id: 2, name: 'Cat' },
    { id: 3, name: 'Dog' },
    { id: 4, name: 'Kangaroo' },
    { id: 5, name: 'Koala' },
    { id: 6, name: 'Penguin' },
    { id: 7, name: 'Snake' },
    { id: 8, name: 'Turtle' },
    { id: 9, name: 'Wombat' },
  ];
  const [animalId, setAnimalId] = useState<Selection>();

  const animalOptions = [
    { name: 'Koala' },
    { name: 'Kangaroo' },
    { name: 'Platypus' },
    { name: 'Bald Eagle' },
    { name: 'Bison' },
    { name: 'Skunk' },
  ];
  return (
    <>
      <Heading level={1}>List Box</Heading>
      <Content>
        <CodeExample
          title="Selection"
          rspCode={`<ListBox
    width="size-2400"
    aria-label="Animal"
    items={options}
    selectionMode="single"
    onSelectionChange={setAnimalId}
  >
    {item => <Item>{item.name}</Item>}
  </ListBox>
  <Heading>Animal id: {animalId}</Heading>`}
          rspChildren={
            <>
              <ListBox
                width="size-2400"
                aria-label="Animal"
                items={options}
                selectionMode="single"
                onSelectionChange={setAnimalId}
              >
                {(item) => <Item>{item.name}</Item>}
              </ListBox>
              <Heading>Animal id: {animalId}</Heading>
            </>
          }
          swcCode="N/A"
        />
        <CodeExample
          title="Multi Selection"
          rspCode={`<ListBox
  selectionMode="multiple"
  aria-label="Pick an animal"
  items={animalOptions}
  defaultSelectedKeys={['Bison', 'Koala']}
  width="size-2400">
  {item => <Item key={item.name}>{item.name}</Item>}
</ListBox>`}
          rspChildren={
            <ListBox
              selectionMode="multiple"
              aria-label="Pick an animal"
              items={animalOptions}
              defaultSelectedKeys={['Bison', 'Koala']}
              width="size-2400"
            >
              {(item) => <Item key={item.name}>{item.name}</Item>}
            </ListBox>
          }
          swcCode="N/A"
        />
        <CodeExample
          title="Sections"
          rspCode={`<ListBox
  width="size-2400"
  aria-label="Pick your favorite"
  selectionMode="single"
>
  <Section title="Animals">
    <Item key="Aardvark">Aardvark</Item>
    <Item key="Kangaroo">Kangaroo</Item>
    <Item key="Snake">Snake</Item>
  </Section>
  <Section title="People">
    <Item key="Danni">Danni</Item>
    <Item key="Devon">Devon</Item>
    <Item key="Ross">Ross</Item>
  </Section>
</ListBox>`}
          rspChildren={
            <ListBox width="size-2400" aria-label="Pick your favorite" selectionMode="single">
              <Section title="Animals">
                <Item key="Aardvark">Aardvark</Item>
                <Item key="Kangaroo">Kangaroo</Item>
                <Item key="Snake">Snake</Item>
              </Section>
              <Section title="People">
                <Item key="Danni">Danni</Item>
                <Item key="Devon">Devon</Item>
                <Item key="Ross">Ross</Item>
              </Section>
            </ListBox>
          }
          swcCode="N/A"
        />
        <CodeExample
          title="Complex Items"
          rspCode={`<ListBox width="size-2400" aria-label="Options" selectionMode="single">
  <Section title="Permission">
    <Item textValue="Read">
      <Book size="S" />
      <Text>Read</Text>
      <Text slot="description">Read Only</Text>
    </Item>
    <Item textValue="Write">
      <Draw size="S" />
      <Text>Write</Text>
      <Text slot="description">Read and Write Only</Text>
    </Item>
    <Item textValue="Admin">
      <BulkEditUsers size="S" />
      <Text>Admin</Text>
      <Text slot="description">Full access</Text>
    </Item>
  </Section>
</ListBox>`}
          rspChildren={
            <ListBox width="size-2400" aria-label="Options" selectionMode="single">
              <Section title="Permission">
                <Item textValue="Read">
                  <Book size="S" />
                  <Text>Read</Text>
                  <Text slot="description">Read Only</Text>
                </Item>
                <Item textValue="Write">
                  <Draw size="S" />
                  <Text>Write</Text>
                  <Text slot="description">Read and Write Only</Text>
                </Item>
                <Item textValue="Admin">
                  <BulkEditUsers size="S" />
                  <Text>Admin</Text>
                  <Text slot="description">Full access</Text>
                </Item>
              </Section>
            </ListBox>
          }
          swcCode="N/A"
        />
      </Content>
    </>
  );
}
