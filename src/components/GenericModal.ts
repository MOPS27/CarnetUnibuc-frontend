import { genericApiPost } from "../api/GenericApi";
import { IStudyProgramsAPI } from "../api/StudyProgramsApi";
import { ISubjectAPI } from "../api/SubjectsApi";

export interface IModal {
    onSave: { (): void };
  }

export const genericAddModalSave = (data:(ISubjectAPI | IStudyProgramsAPI), endpoint:string, onSave:{():void}, onClose:{():void}) => {
    genericApiPost(data, endpoint).then((res) => {
        onSave();
        onClose();
      });
}