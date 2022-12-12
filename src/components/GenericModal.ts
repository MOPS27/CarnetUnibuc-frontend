import { APIObjectPost, genericApiPost  } from "../api/GenericApi";

export interface IModal {
    onSave: { (): void };
    parentId?:string;
  }

export const genericAddModalSave = (data:APIObjectPost, endpoint:string, onSave:{():void}, onClose:{():void}) => {
  const json = JSON.stringify(data, null, 2);
    genericApiPost(data, endpoint).then((res) => {
        onSave();
        onClose();
      });
}