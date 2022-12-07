/**
 * Studentii inscrisi in anul curent
 */
import DataPageTemplate from "../templates/DataPageTemplate";
import { IDataTableHeader } from "../../components/DataTable";
import { AddIcon, DownloadIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup } from "@chakra-ui/react";

const title = "Studenți";

const module = () => {
  const headers: IDataTableHeader[] = [
    {
      name: "Nume",
    },
    {
      name: "Prenume",
    },
    {
      name: "Grupă",
    },
    {
      name: "Adresa e-mail",
    },
  ];

  const rows = [
    ["Ion", "Popescu", "134", "Ion.Popescu@gmail.com"],
    ["Ion", "Popescu", "144", "Ion.Popescu@gmail.com"],
  ];

  const controls = (
    <>
      <ButtonGroup paddingLeft="3" colorScheme={"teal"} alignSelf={"start"}>
        <Button leftIcon={<AddIcon />}>Adaugă student</Button>
        <Button leftIcon={<DownloadIcon />}>Importă listă studenți</Button>
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
