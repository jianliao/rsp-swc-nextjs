import {
  Content,
  Heading,
  Cell,
  Column,
  Row,
  TableView,
  TableBody,
  TableHeader,
  Link,
  Flex,
  Divider,
} from '@adobe/react-spectrum';
import CodeExample from '@components/CodeExample';
import { useAsyncList } from '@react-stately/data';

export default function TableViewPage() {
  type ROW = {
    id: number;
    name: string;
    date: string;
    type: string;
  };
  type COLUMN = {
    name: string;
    uid: string;
  };
  const columns: Array<COLUMN> = [
    { name: 'Name', uid: 'name' },
    { name: 'Type', uid: 'type' },
    { name: 'Date Modified', uid: 'date' },
  ];

  const rows: Array<ROW> = [
    { id: 1, name: 'Games', date: '6/7/2020', type: 'File folder' },
    { id: 2, name: 'Program Files', date: '4/7/2021', type: 'File folder' },
    { id: 3, name: 'bootmgr', date: '11/20/2010', type: 'System file' },
    { id: 4, name: 'log.txt', date: '1/18/2016', type: 'Text Document' },
  ];

  const columns2 = [
    { name: 'Name', key: 'name' },
    { name: 'Height', key: 'height' },
    { name: 'Mass', key: 'mass' },
    { name: 'Birth Year', key: 'birth_year' },
  ];

  const list = useAsyncList({
    async load({ signal, cursor }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, 'https://');
      }

      const res = await fetch(cursor || `https://swapi.py4e.com/api/people/?search=`, { signal });
      const json = await res.json();

      return {
        items: json.results,
        cursor: json.next,
      };
    },
  });
  return (
    <>
      <Flex alignItems={'baseline'}>
        <Heading level={1}>Table View</Heading>
        <Link>
          <a href="https://react-spectrum.adobe.com/react-spectrum/TableView.html">RSP link</a>
        </Link>
      </Flex>
      <Content>
        <CodeExample
          title="Basic"
          rspCode={`<TableView
  aria-label="Example table with static contents"
  selectionMode="multiple"
>
  <TableHeader>
    <Column>Name</Column>
    <Column>Type</Column>
    <Column align="end">Date Modified</Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>Games</Cell>
      <Cell>File folder</Cell>
      <Cell>6/7/2020</Cell>
    </Row>
    <Row>
      <Cell>Program Files</Cell>
      <Cell>File folder</Cell>
      <Cell>4/7/2021</Cell>
    </Row>
    <Row>
      <Cell>bootmgr</Cell>
      <Cell>System file</Cell>
      <Cell>11/20/2010</Cell>
    </Row>
    <Row>
      <Cell>log.txt</Cell>
      <Cell>Text Document</Cell>
      <Cell>1/18/2016</Cell>
    </Row>
  </TableBody>
</TableView>`}
          rspChildren={
            <TableView aria-label="Example table with static contents" selectionMode="multiple">
              <TableHeader>
                <Column>Name</Column>
                <Column>Type</Column>
                <Column align="end">Date Modified</Column>
              </TableHeader>
              <TableBody>
                <Row>
                  <Cell>Games</Cell>
                  <Cell>File folder</Cell>
                  <Cell>6/7/2020</Cell>
                </Row>
                <Row>
                  <Cell>Program Files</Cell>
                  <Cell>File folder</Cell>
                  <Cell>4/7/2021</Cell>
                </Row>
                <Row>
                  <Cell>bootmgr</Cell>
                  <Cell>System file</Cell>
                  <Cell>11/20/2010</Cell>
                </Row>
                <Row>
                  <Cell>log.txt</Cell>
                  <Cell>Text Document</Cell>
                  <Cell>1/18/2016</Cell>
                </Row>
              </TableBody>
            </TableView>
          }
          swcCode="N/A"
        />
        <CodeExample
          title={'Programmatically Content'}
          rspCode={`const columns = [
  {name: 'Name', uid: 'name'},
  {name: 'Type', uid: 'type'},
  {name: 'Date Modified', uid: 'date'}
];

const rows = [
  {id: 1, name: 'Games', date: '6/7/2020', type: 'File folder'},
  {id: 2, name: 'Program Files', date: '4/7/2021', type: 'File folder'},
  {id: 3, name: 'bootmgr', date: '11/20/2010', type: 'System file'},
  {id: 4, name: 'log.txt', date: '1/18/2016', type: 'Text Document'}
];

<TableView
  aria-label="Example table with dynamic content"
  maxWidth="size-6000">
  <TableHeader columns={columns}>
    {column => (
      <Column
        key={column.uid}
        align={column.uid === 'date' ? 'end' : 'start'}>
        {column.name}
      </Column>
    )}
  </TableHeader>
  <TableBody items={rows}>
    {item => (
      <Row>
        {columnKey => <Cell>{item[columnKey]}</Cell>}
      </Row>
    )}
  </TableBody>
</TableView>`}
          rspChildren={
            <TableView aria-label="Example table with dynamic content" maxWidth="size-6000">
              <TableHeader columns={columns}>
                {(column) => (
                  <Column key={column.uid} align={column.uid === 'date' ? 'end' : 'start'}>
                    {column.name}
                  </Column>
                )}
              </TableHeader>
              <TableBody items={rows}>
                {(item) => (
                  <Row>
                    {/* @ts-ignore */}
                    {(columnKey) => <Cell>{item[columnKey]}</Cell>}
                  </Row>
                )}
              </TableBody>
            </TableView>
          }
          swcCode="N/A"
        />
        <CodeExample
          title={'Asynchronous loading'}
          rspCode={`<TableView aria-label="example async loading table" height="size-3000">
  <TableHeader columns={columns2}>
    {(column) => (
      <Column align={column.key !== 'name' ? 'end' : 'start'}>
        {column.name}
      </Column>
    )}
  </TableHeader>
  <TableBody
    items={list.items}
    loadingState={list.loadingState}
    onLoadMore={list.loadMore}
  >
    {(item: any) => (
      <Row key={item.name}>{(key) => <Cell>{item[key]}</Cell>}</Row>
    )}
  </TableBody>
</TableView>`}
          rspChildren={
            <TableView aria-label="example async loading table" height="size-3000">
              <TableHeader columns={columns2}>
                {(column) => <Column align={column.key !== 'name' ? 'end' : 'start'}>{column.name}</Column>}
              </TableHeader>
              <TableBody items={list.items} loadingState={list.loadingState} onLoadMore={list.loadMore}>
                {(item: any) => <Row key={item.name}>{(key) => <Cell>{item[key]}</Cell>}</Row>}
              </TableBody>
            </TableView>
          }
          swcCode="N/A"
        />
        <CodeExample
          title="Selection"
          rspCode={`<TableView
  aria-label="Example table with multiple selection"
  selectionMode="multiple"
  defaultSelectedKeys={['2', '4']}
>
  <TableHeader>
    <Column>Name</Column>
    <Column>Type</Column>
    <Column align="end">Level</Column>
  </TableHeader>
  <TableBody>
    <Row key="1">
      <Cell>Charizard</Cell>
      <Cell>Fire, Flying</Cell>
      <Cell>67</Cell>
    </Row>
    <Row key="2">
      <Cell>Blastoise</Cell>
      <Cell>Water</Cell>
      <Cell>56</Cell>
    </Row>
    <Row key="3">
      <Cell>Venusaur</Cell>
      <Cell>Grass, Poison</Cell>
      <Cell>83</Cell>
    </Row>
    <Row key="4">
      <Cell>Pikachu</Cell>
      <Cell>Electric</Cell>
      <Cell>100</Cell>
    </Row>
  </TableBody>
</TableView>`}
          rspChildren={
            <TableView
              aria-label="Example table with multiple selection"
              selectionMode="multiple"
              defaultSelectedKeys={['2', '4']}
            >
              <TableHeader>
                <Column>Name</Column>
                <Column>Type</Column>
                <Column align="end">Level</Column>
              </TableHeader>
              <TableBody>
                <Row key="1">
                  <Cell>Charizard</Cell>
                  <Cell>Fire, Flying</Cell>
                  <Cell>67</Cell>
                </Row>
                <Row key="2">
                  <Cell>Blastoise</Cell>
                  <Cell>Water</Cell>
                  <Cell>56</Cell>
                </Row>
                <Row key="3">
                  <Cell>Venusaur</Cell>
                  <Cell>Grass, Poison</Cell>
                  <Cell>83</Cell>
                </Row>
                <Row key="4">
                  <Cell>Pikachu</Cell>
                  <Cell>Electric</Cell>
                  <Cell>100</Cell>
                </Row>
              </TableBody>
            </TableView>
          }
          swcCode="N/A"
        />
      </Content>
    </>
  );
}
