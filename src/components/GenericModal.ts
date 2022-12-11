import { APIObject, genericApiPost  } from "../api/GenericApi";



export interface IModal {
    onSave: { (): void };
  }

export const genericAddModalSave = (data:APIObject, endpoint:string, onSave:{():void}, onClose:{():void}) => {
  const json = JSON.stringify(data, null, 2);
    genericApiPost(data, endpoint).then((res) => {
        onSave();
        onClose();
      });
}