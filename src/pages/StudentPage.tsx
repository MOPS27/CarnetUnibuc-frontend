/**
 * Studentii inscrisi in anul curent
 */
import DataPageTemplate from "./templates/DataPageTemplate";
import { IDataTableHeader } from "../components/DataTable";
import { AddIcon, DownloadIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup } from "@chakra-ui/react";
import AddStudentModal from "../components/AddStudentModal";

const title = "Bine ai venit, Student!";

const module = () => {
  const headers: IDataTableHeader[] = [
    {
      name: "Materie",
    },
    {
      name: "Notă",
    },
  ];

  const rows = [
    ["Calculabilitate si Complexitate", "7"],
    ["Algoritmi & Structuri de Date", "10"],
  ];

  const controls = <></>;

  return (
    <>
      <DataPageTemplate
        title={title}
        headers={headers}
        rows={rows}
        controls={controls}
        canEditRow={false}
        canDeleteRow={false}
      />
    </>
  );
};
export default module;
