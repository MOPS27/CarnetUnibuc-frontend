import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

import {
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Link,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

export interface IDataTableHeader {
  name: string;
  isNumeric?: boolean;
}

export type IDataTableRow = any[];

export interface IDataTable {
  headers: IDataTableHeader[];
  rows: IDataTableRow[];
  canEditRow: boolean;
  canDeleteRow: boolean;
  rowLink?: string;
}
const DataTable = (props: IDataTable) => {
  const tableHeaders = props.headers.map((headerData, index) => (
    <Th key={headerData.name} isNumeric={headerData.isNumeric ?? false}>
      {headerData.name}
    </Th>
  ));

  const actionTableHeader =
    props.canEditRow || props.canDeleteRow ? <Th>Acțiuni</Th> : null;

  const tableRows = props.rows.map((rowData) => {
    const rowKey = rowData[0];
    const cells = rowData
      .slice(1)
      .map((cellValue: any) => <Td key={cellValue + rowKey}>{cellValue}</Td>);
    console.log(rowKey);
    const editRowButton = props.canEditRow ? (
      <IconButton mr="2" aria-label="edit" icon={<EditIcon />} />
    ) : null;
    const deleteRowButton = props.canDeleteRow ? (
      <IconButton mr="2" aria-label="delete" icon={<DeleteIcon />} />
    ) : null;

    const rowLink = props.rowLink ? props.rowLink.replace(":id", rowKey) : "#";
    return (
      <LinkBox as={Tr}>
        {cells}
        <Td hidden={!(editRowButton || deleteRowButton)}>
          {editRowButton}
          {deleteRowButton}
          <LinkOverlay as={Link} href={rowLink}></LinkOverlay>
        </Td>
      </LinkBox>
    );
  });

  return (
    <>
      <TableContainer width="100%">
        <Table variant="simple">
          <Thead>
            <Tr>
              {tableHeaders}
              {actionTableHeader}
            </Tr>
          </Thead>
          <Tbody>{tableRows}</Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
