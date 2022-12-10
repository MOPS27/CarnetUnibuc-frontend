import { genericApiPost } from "../api/GenericApi";
import { ISubjectAPI } from "../api/SubjectsApi";
import { IStudentDetailsAPI } from "./AddStudentModal";
import { IStudyProgramsAPI } from "./AddStudyProgramModal";

export interface IModal {
    onSave: { (): void };
  }

export const genericAddModalSave = (data:(ISubjectAPI | IStudyProgramsAPI | IStudentDetailsAPI[]), endpoint:string, onSave:{():void}, onClose:{():void}) => {
  const json = JSON.stringify(data, null, 2);
    genericApiPost(data, endpoint).then((res) => {
        onSave();
        onClose();
      });
}