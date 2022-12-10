import { Heading, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import DataTable, { IDataTableHeader } from "../../components/DataTable";

interface IDataPageTemplate {
  title: string;
  controls?: ReactNode;
  headers: IDataTableHeader[];
  rows: any;
  canEditRow?: boolean;
  canDeleteRow?: boolean;
}

const component = (props: IDataPageTemplate) => {
  return (
    <>
      <VStack paddingLeft="25%" paddingRight="25%">
        <Heading padding="5" paddingTop="10">
          {props.title}
        </Heading>
        {props.controls}
        <DataTable
          headers={props.headers}
          rows={props.rows}
          canEditRow={props.canEditRow ?? true}
          canDeleteRow={props.canDeleteRow ?? true}
        />
      </VStack>
    </>
  );
};

export default component;
