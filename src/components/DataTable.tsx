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
  Link,
  LinkBox,
  LinkOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SetGradeModal from "./SetGradeModal";

export interface IDataTableHeader {
  name: string;
  isNumeric?: boolean;
}

export interface IDataTable<IDataTableRow = any[]> {
  headers: IDataTableHeader[];
  rows: IDataTableRow[];
  canEditRow: boolean;
  canDeleteRow: boolean;
  rowLink?: string;
  editModal?: any;
  onSave?: any;
}
function DataTable<IDataTableRow = any[]>(props: IDataTable<IDataTableRow>) {
  const [selectedRow, setSelectedRow] = useState<IDataTableRow>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const actionTableHeader =
    props.canEditRow || props.canDeleteRow ? <Th>Acțiuni</Th> : null;

  const editRowButton = props.canEditRow ? (
    <IconButton mr="2" aria-label="edit" icon={<EditIcon />} />
  ) : null;
  const deleteRowButton = props.canDeleteRow ? (
    <IconButton mr="2" aria-label="delete" icon={<DeleteIcon />} />
  ) : null;

  // hidden={!(editRowButton || deleteRowButton)}>
  //   {editRowButton}
  //   {deleteRowButton}

  return (
    <>
      {/* <SetGradeModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        data={selectedRow}
        onSave={() => {}}
      /> */}
      {props.editModal ? (
        props.editModal({
          onSave: props.onSave,
          isOpen: isOpen,
          onOpen: onOpen,
          onClose: onClose,
          data: selectedRow,
        })
      ) : null}
      <TableContainer width="100%">
        <Table variant="simple">
          <Thead>
            <Tr>
              {props.headers.map((headerData, index) => (
                <Th key={headerData.name} isNumeric={headerData.isNumeric ?? false}>
                  {headerData.name}
                </Th>
              ))}
              {/* {actionTableHeader} */}
            </Tr>
          </Thead>
          <Tbody>{props.rows.map((rowData) => {
            const rowKey = rowData[0];
            const cells = rowData
              .slice(1)
              .map((cellValue: any) => <Td key={cellValue + rowKey}>{cellValue}</Td>);
        
            const rowLink = props.rowLink ? generatePath(props.rowLink, {
              id: rowKey
            }) : '#';
            return (
              <LinkBox
                as={Tr}
                onClick={() => {
                  setSelectedRow(rowData);
                  onOpen();
                }}
              >
                {cells}
                <LinkOverlay as={Link} href={rowLink}></LinkOverlay>
              </LinkBox>
            );
          })}</Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
