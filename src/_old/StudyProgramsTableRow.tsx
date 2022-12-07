import { Center, Icon, IconButton, Td, Tr } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
interface IStudyProgramsTableRow {
  name: string;
  years: number;
  type: string;
  isDeletable?: boolean;
}

const component = (props: IStudyProgramsTableRow) => {
  return (
    <>
      <Tr>
        <Td>{props.name}</Td>
        <Td>{props.type}</Td>
        <Td isNumeric>{props.years}</Td>
        <Td>
          <IconButton
            isActive={props.isDeletable ?? false}
            colorScheme="red"
            variant="ghost"
            aria-label="Șterge program de studiu"
            icon={<Icon as={FaTrashAlt} />}
          />
        </Td>
      </Tr>
    </>
  );
};

export default component;
