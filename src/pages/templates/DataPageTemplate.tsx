import { Heading, VStack } from "@chakra-ui/react";
import DataTable, { IDataTableHeader } from "../../components/DataTable";

interface IDataPageTemplate {
  title: string;
  headers: IDataTableHeader[];
  rows: any;
}
const component = (props: IDataPageTemplate) => {
  return (
    <>
      <VStack>
        <Heading padding="10">{props.title}</Heading>
        <DataTable headers={props.headers} rows={props.rows} />
      </VStack>
    </>
  );
};

export default component;
