/**
 *  Programe de studii - mate/info/cti
 */
import DataPageTemplate from "../templates/DataPageTemplate";
import { IDataTableHeader } from "../../components/DataTable";
import { ButtonGroup } from "@chakra-ui/react";
import AddStudyProgramModal from "../../components/AddStudyProgramModal";
import { useEffect, useState } from "react";
import { genericApiGet, studyProgramsEndpoint } from "../../api/GenericApi";

const Component = () => {
  ///// Config /////
  const title = "Programe de studiu";
  const headers = [
    {
      name: "Nume program de studiu",
    },
    {
      name: "Număr ani",
    },
  ];
  const apiEndpoint = studyProgramsEndpoint;

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
        <AddStudyProgramModal onSave={onSave} />
      </ButtonGroup>
    </>
  );

  return (
    <DataPageTemplate
      title={title}
      headers={headers}
      rows={rows}
      controls={controls}
    />
  );
};
export default Component;
