import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export interface IDataTableHeader {
  name: string;
  isNumeric?: boolean;
}

export type IDataTableRow = any[];

export interface IDataTable {
  headers: IDataTableHeader[];
  rows: IDataTableRow[];
}
const component = (props: IDataTable) => {
  const tableHeaders = props.headers.map((headerData) => (
    <Th isNumeric={headerData.isNumeric ?? false}>{headerData.name}</Th>
  ));

  const tableRows = props.rows.map((rowData) => {
    const cells = rowData.map((cellValue: any) => <Td>{cellValue}</Td>);
    return (
      <>
        <Tr>{cells}</Tr>
      </>
    );
  });

  return (
    <>
      <TableContainer minWidth="50vw">
        <Table variant="simple">
          <Thead>
            <Tr>{tableHeaders}</Tr>
          </Thead>
          <Tbody>{tableRows}</Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default component;
