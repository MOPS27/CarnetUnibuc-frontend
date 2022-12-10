/**
 * Studentii inscrisi in anul curent
 */
import DataPageTemplate from "../templates/DataPageTemplate";
import { IDataTableHeader } from "../../components/DataTable";
import { AddIcon, DownloadIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup } from "@chakra-ui/react";
import AddStudentModal from "../../components/AddStudentModal";
import { genericApiGet, studentsEndpoint } from "../../api/GenericApi";
import { useEffect, useState } from "react";

const title = "Studenți";

const Component = () => {
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

  // const rows = [
  //   ["Ion", "Popescu", "134", "Ion.Popescu@gmail.com"],
  //   ["Ion", "Popescu", "144", "Ion.Popescu@gmail.com"],
  // ];

  const apiEndpoint = studentsEndpoint;

  const [rows, setRows] = useState([]);
  const [dataRows, setDataRows] = useState();

  const refreshRows = () => {
    genericApiGet(apiEndpoint).then((dataRows) => setDataRows(dataRows));
  };

  const onSave = refreshRows;

  useEffect(() => {
    refreshRows();
  }, []);

  useEffect(() => {
    if (!dataRows) return;
    setRows(dataRows);
  }, [dataRows]);

  const controls = (
    <>
      <ButtonGroup paddingLeft="3" colorScheme={"teal"} alignSelf={"start"}>
        <AddStudentModal onSave={onSave} />
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
export default Component;
