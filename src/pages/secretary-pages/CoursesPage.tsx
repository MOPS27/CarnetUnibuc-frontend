/**
 * Cursuri - un curs este o instanta a unei materii, tinuta intr-un an de un anumit prof
 * la care sunt inscrisi un numar de studenti
 */
import DataPageTemplate from "../templates/DataPageTemplate";
import { IDataTableHeader } from "../../components/DataTable";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const title = "Cursuri";

const module = () => {
  const headers: IDataTableHeader[] = [
    {
      name: "Materie",
    },
    {
      name: "Profesor",
    },
    {
      name: "An universitar",
    },
  ];

  const rows = [
    ["Algoritmi & Structuri de Date", "Marius Dumitran", "2022-2023"],
    ["Tehnici Web", "Carmen Chiriță", "2022-2023"],
    ["Analiză matematică", "Petre Iliaș", "2022-2023"],
  ];

  const controls = (
    <>
      <ButtonGroup paddingLeft="3" colorScheme={"teal"} alignSelf={"start"}>
        <Button leftIcon={<AddIcon />}>Adaugă curs</Button>
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
