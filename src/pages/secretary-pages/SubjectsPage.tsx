/**
 * Materii
 */
import DataPageTemplate from "../templates/DataPageTemplate";
import { IDataTableHeader } from "../../components/DataTable";
import { ButtonGroup } from "@chakra-ui/react";
import AddSubjectModal from "../../components/AddSubjectModal";
import { genericApiGet, subjectEndpoint } from "../../api/GenericApi";
import { useEffect, useState } from "react";

const Component = () => {
  ///// Config /////
  const title = "Materii";
  const headers: IDataTableHeader[] = [
    {
      name: "Nume materie",
    },
    {
      name: "Număr credite",
    },
  ];
  const apiEndpoint = subjectEndpoint;

  const [rows, setRows] = useState([]);
  const [dataRows, setDataRows] = useState();

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
    setRows(dataRows);
  }, [dataRows]);

  const controls = (
    <>
      <ButtonGroup paddingLeft="3" colorScheme={"teal"} alignSelf={"start"}>
        <AddSubjectModal onSave={onSave} />
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
