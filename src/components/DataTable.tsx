import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  IconButton,
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
        <Tr>
          {cells}
          <td>
            <IconButton mr="2" aria-label="edit" icon={<EditIcon />} />
            <IconButton aria-label="sterge" icon={<DeleteIcon />} />
          </td>
        </Tr>
      </>
    );
  });

  return (
    <>
      <TableContainer width="100%">
        <Table variant="simple">
          <Thead>
            <Tr>
              {tableHeaders}
              <Td>Acțiuni</Td>
            </Tr>
          </Thead>
          <Tbody>{tableRows}</Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default component;
