/**
 * Materii
 */
import DataPageTemplate from "../templates/DataPageTemplate";
import { IDataTableHeader } from "../../components/DataTable";

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

  return (
    <>
      <DataPageTemplate title={title} headers={headers} rows={rows} />
    </>
  );
};
export default module;
