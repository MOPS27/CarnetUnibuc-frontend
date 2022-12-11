/**
 * Cursuri - un curs este o instanta a unei materii, tinuta intr-un an de un anumit prof
 * la care sunt inscrisi un numar de studenti
 */
import DataPageTemplate from "../templates/DataPageTemplate";
import { IDataTableHeader } from "../../components/DataTable";
import { Button, ButtonGroup } from "@chakra-ui/react";
import AddCourseModal from "../../components/AddCourseModal";
import { coursesEndpoint, genericApiGet } from "../../api/GenericApi";
import { useEffect, useState } from "react";

const title = "Cursuri";

const Component = () => {
  const headers: IDataTableHeader[] = [
    {
      name: "Profesor",
    },
    {
      name: "Materie",
    },
    {
      name: "An universitar",
    },
  ];

  const apiEndpoint = coursesEndpoint;

  const [rows, setRows] = useState([]);
  const [dataRows, setDataRows] = useState();

  const refreshRows = () => {
    genericApiGet(apiEndpoint).then((dataRows) => {
      setDataRows(dataRows);
    });
  };

  const onSave = refreshRows;

  useEffect(() => {
    refreshRows();
  }, []);

  useEffect(() => {
    if (!dataRows) return;
    setRows(dataRows);
  }, [dataRows]);

  // const rows = [
  //   [1, "Algoritmi & Structuri de Date", "Marius Dumitran", "2022-2023"],
  //   [2, "Tehnici Web", "Carmen Chiriță", "2022-2023"],
  //   [3, "Analiză matematică", "Petre Iliaș", "2022-2023"],
  // ];

  const controls = (
    <>
      <ButtonGroup paddingLeft="3" colorScheme={"teal"} alignSelf={"start"}>
        <AddCourseModal onSave={onSave} />
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
