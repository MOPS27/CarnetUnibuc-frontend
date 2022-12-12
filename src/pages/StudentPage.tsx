/**
 * Studentii inscrisi in anul curent
 */
import DataPageTemplate from "./templates/DataPageTemplate";
import { IDataTableHeader } from "../components/DataTable";
import { genericApiGet, gradesEndpoint } from "../api/GenericApi";
import { useEffect, useState } from "react";

const title = "Bine ai venit, student!";

const Component = () => {
  const headers: IDataTableHeader[] = [
    {
      name: "Materie",
    },
    {
      name: "Număr credite",
    },
    {
      name: "Notă",
    },
  ];

  const apiEndpoint = gradesEndpoint + "/1";

  const controls = <></>;

  const [rows, setRows] = useState([]);
  const [dataRows, setDataRows] = useState<any>([]);

  const refreshRows = () => {
    genericApiGet(apiEndpoint).then((dataRows) => setDataRows(dataRows));
  };

  const onSave = refreshRows;
  ///// End Config /////

  useEffect(() => {
    refreshRows();
  }, []);

  useEffect(() => {
    if (!dataRows) return;
    const parsedRows = dataRows.map((row: any) => {
      //TODO: refactor
      return [null, row[0].name, row[0].creditCount, row[1]];
    });
    setRows(parsedRows);
  }, [dataRows]);

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
export default Component;
