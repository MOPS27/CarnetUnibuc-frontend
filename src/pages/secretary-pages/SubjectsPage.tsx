/**
 * Materii
 */
import DataPageTemplate from "../templates/DataPageTemplate";
import { IDataTableHeader } from "../../components/DataTable";
import { ButtonGroup } from "@chakra-ui/react";
import AddSubjectModal from "../../components/AddSubjectModal";

const module = () => {
  const title = "Materii";
  const headers: IDataTableHeader[] = [
    {
      name: "Nume materie",
    },
    {
      name: "Număr credite",
    },
  ];

  const rows = [
    ["Algoritmi & Structuri de date", 6],
    ["Tehnici Web", 3],
    ["Analiză matematică", 5],
  ];

  const controls = (
    <>
      <ButtonGroup paddingLeft="3" colorScheme={"teal"} alignSelf={"start"}>
        <AddSubjectModal />
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
