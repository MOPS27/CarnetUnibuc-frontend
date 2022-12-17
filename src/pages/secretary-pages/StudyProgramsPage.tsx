/**
 *  Programe de studii - mate/info/cti
 */
import DataPageTemplate from "../templates/DataPageTemplate";
import { IDataTableHeader } from "../../components/DataTable";
import { ButtonGroup } from "@chakra-ui/react";
import AddStudyProgramModal from "../../components/AddStudyProgramModal";
import { useCallback, useEffect, useState } from "react";
import { genericApiGet, IStudyProgramsAPI, studyProgramsEndpoint } from "../../api/GenericApi";

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

const Component = () => {
  const [rows, setRows] = useState<IStudyProgramsAPI[]>([]);

  const refreshRows = useCallback(async () => {
    const dataRows = await genericApiGet(apiEndpoint);

    setRows(dataRows || []);
  }, []);

  useEffect(() => {
    refreshRows();
  }, []);

  const controls = (
    <>
      <ButtonGroup paddingLeft="3" colorScheme={"teal"} alignSelf={"start"}>
        <AddStudyProgramModal onSave={refreshRows} />
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
