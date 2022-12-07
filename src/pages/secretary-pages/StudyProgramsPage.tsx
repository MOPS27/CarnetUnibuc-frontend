/**
 *  Programe de studii - mate/info/cti
 */
import DataPageTemplate from "../templates/DataPageTemplate";
import { IDataTableHeader } from "../../components/DataTable";

const module = () => {
  const title = "Programe de studiu";
  const headers: IDataTableHeader[] = [
    {
      name: "Nume program de studiu",
    },
    {
      name: "Tip învățământ",
    },
    {
      name: "Număr ani",
    },
  ];

  const rows = [
    ["Matematică", "Frecvență", 3],
    ["Informatică", "Frecvență", 3],
    ["Calculatoare și Tehnologia Informației", "Frecvență", 4],
  ];

  return (
    <>
      <DataPageTemplate title={title} headers={headers} rows={rows} />
    </>
  );
};
export default module;
