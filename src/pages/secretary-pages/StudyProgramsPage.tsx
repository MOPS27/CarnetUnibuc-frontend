/**
 *  Programe de studii - mate/info/cti
 */
import DataPageTemplate from "../templates/DataPageTemplate";
import { IDataTableHeader } from "../../components/DataTable";
import { AddIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup } from "@chakra-ui/react";
import AddStudyProgramModal from "../../components/AddStudyProgramModal";

const module = () => {
  const title = "Programe de studiu";
  const headers: IDataTableHeader[] = [
    {
      name: "Nume program de studiu",
    },
    {
      name: "Tip învățământ",
    },
    {
      name: "Număr ani",
    },
  ];

  const rows = [
    ["Matematică", "Frecvență", 3],
    ["Informatică", "Frecvență", 3],
    ["Calculatoare și Tehnologia Informației", "Frecvență", 4],
  ];
  const controls = (
    <>
      <ButtonGroup paddingLeft="3" colorScheme={"teal"} alignSelf={"start"}>
        {/* <Button leftIcon={<AddIcon />}>Adaugă program de studiu</Button> */}
        <AddStudyProgramModal />
      </ButtonGroup>
    </>
  );

  return (
    <>
      <DataPageTemplate
        title={title}
        headers={headers}
        rows={rows}
        controls={controls}
      />
    </>
  );
};
export default module;
