/**
 * Studentii inscrisi in anul curent
 */
import DataPageTemplate from "../templates/DataPageTemplate";
import { IDataTableHeader } from "../../components/DataTable";

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

  return (
    <>
      <DataPageTemplate title={title} headers={headers} rows={rows} />
    </>
  );
};
export default module;
