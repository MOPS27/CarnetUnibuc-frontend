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

  const refreshRows = () => {
    genericApiGet(apiEndpoint).then((dataRows) => {
      const parsedRows = dataRows.map((row: any) => {
        console.log("GetRow", row);

        //TODO: refactor
        return [row[0], row[1], row[2].name, row[3]];
      });
      setRows(parsedRows);
    });
  };

  const onSave = refreshRows;

  useEffect(() => {
    refreshRows();
  }, []);

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
        rowLink={"/courses/:id/students"}
      />
    </>
  );
};
export default Component;
