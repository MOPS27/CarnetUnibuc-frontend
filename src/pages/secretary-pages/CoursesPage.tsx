/**
 * Cursuri - un curs este o instanta a unei materii, tinuta intr-un an de un anumit prof
 * la care sunt inscrisi un numar de studenti
 */
import DataPageTemplate from "../templates/DataPageTemplate";
import { IDataTableHeader } from "../../components/DataTable";

const title = "Cursuri";

const module = () => {
  const headers: IDataTableHeader[] = [
    {
      name: "Materie",
    },
    {
      name: "Profesor",
    },
    {
      name: "An universitar",
    },
  ];

  const rows = [
    ["Algoritmi & Structuri de Date", "Marius Dumitran", "2022-2023"],
    ["Tehnici Web", "Carmen Chiriță", "2022-2023"],
    ["Analiză matematică", "Petre Iliaș", "2022-2023"],
  ];

  return (
    <>
      <DataPageTemplate title={title} headers={headers} rows={rows} />
    </>
  );
};
export default module;
