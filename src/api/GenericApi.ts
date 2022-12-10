import { default as axios } from "axios";
import { API_URL } from "../Constants";
import { IStudyProgramsAPI } from "./StudyProgramsApi";
import { ISubjectAPI } from "./SubjectsApi";

export const studyProgramsEndpoint = "programmes"
export const subjectEndpoint = "courses"
export const coursesEndpoint = "courses"
export const profileEndpoint = "profile"

export const genericApiGet = (apiEndpoint:string) => {
    return axios.get(API_URL + apiEndpoint).then((response) => {
        const data = response.data;
        const dataRows: any = data.map((object:any) => {
          return Object.values(object);
        });
        return dataRows;
      });
}

export const genericApiPost = (data:(IStudyProgramsAPI | ISubjectAPI), endpoint:string) => {
  return axios.post(API_URL + endpoint, data).then((response) => {
      console.log(response)
    });
}