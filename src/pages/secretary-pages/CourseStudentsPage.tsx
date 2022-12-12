/**
 * Cursuri - un curs este o instanta a unei materii, tinuta intr-un an de un anumit prof
 * la care sunt inscrisi un numar de studenti
 */
import DataPageTemplate from "../templates/DataPageTemplate";
import { IDataTableHeader } from "../../components/DataTable";
import { ButtonGroup } from "@chakra-ui/react";
import AddCourseModal from "../../components/AddCourseModal";
import { coursesEndpoint, genericApiGet } from "../../api/GenericApi";
import { useEffect, useState } from "react";
import AddGroupToCourseModal from "../../components/AddGroupToCourseModal";
import { useParams } from "react-router-dom";

const title = "Catalog";

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
  let { courseId } = useParams();

  const apiEndpoint = `${coursesEndpoint}/${courseId}/students`;

  const [rows, setRows] = useState<(string | number)[][]>([]);
  const [dataRows, setDataRows] = useState<any>([]);

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
        <AddGroupToCourseModal onSave={onSave} />
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
