import { APIEndpoint, APIObjectPost, genericApiPost  } from "../api/GenericApi";

export interface IModal {
    onSave: { (): void };
    parentId?:string;
  }

export const genericAddModalSave = <Endpoint extends string>(data: Endpoint extends APIEndpoint ? APIObjectPost[Endpoint] : any, endpoint:Endpoint, onSave:{():void}, onClose:{():void}) => {
    genericApiPost(data, endpoint).then((res) => {
        onSave();
        onClose();
      });
}