/**
 * Studentii inscrisi in anul curent
 */
import DataPageTemplate from "../templates/DataPageTemplate";
import { IDataTableHeader } from "../../components/DataTable";
import { AddIcon, DownloadIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup } from "@chakra-ui/react";
import AddStudentModal from "../../components/AddStudentModal";
import {
  genericApiGet,
  IStudentDetailsAPI,
  studentsEndpoint,
} from "../../api/GenericApi";
import { useEffect, useState } from "react";
import AddStudentsFromJsonModal from "../../components/AddStudentsFromJsonModal";

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
      name: "Adresa e-mail",
    },
    {
      name: "Grupă",
    },
  ];

  const apiEndpoint = studentsEndpoint;

  const [rows, setRows] = useState<(string | number)[][]>([]);
  const [dataRows, setDataRows] = useState<any>([]);

  const refreshRows = () => {
    genericApiGet(apiEndpoint).then((dataRows) => setDataRows(dataRows));
  };

  const onSave = refreshRows;

  useEffect(() => {
    refreshRows();
  }, []);

  useEffect(() => {
    if (!dataRows) return;
    const parsedRows = dataRows.map((row: any) => {
      console.log(row);
      //TODO: refactor
      return [row[0], row[1], row[2], row[3], row[4].groupCode];
    });
    setRows(parsedRows);
  }, [dataRows]);

  const controls = (
    <>
      <ButtonGroup paddingLeft="3" colorScheme={"teal"} alignSelf={"start"}>
        <AddStudentModal onSave={onSave} />
        <AddStudentsFromJsonModal onSave={onSave} />
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
