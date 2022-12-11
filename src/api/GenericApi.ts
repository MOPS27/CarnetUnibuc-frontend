import { default as axios } from "axios";
import { IStudyProgramsAPI } from "../components/AddStudyProgramModal";
import { API_URL } from "../Constants";

import { ISubjectAPI } from "./SubjectsApi";

export const studyProgramsEndpoint = "programmes"
export const subjectEndpoint = "subjects"
export const coursesEndpoint = "courses"
export const profileEndpoint = "profile"
export const studentsEndpoint = "students"

export interface IStudentDetailsAPI {
  firstName: string;
  lastName: string;
  email: string;
  group: IGroupAPI;
}


export interface IGroupAPI {
  groupCode: number;
}



export const genericApiGet = (apiEndpoint:string) => {
    return axios.get(API_URL + apiEndpoint).then((response) => {
        const data = response.data;
        const dataRows: any = data.map((object:any) => {
          return Object.values(object);
        });
        return dataRows;
      });
}

export const genericApiPost = (data:(IStudyProgramsAPI | ISubjectAPI | IStudentDetailsAPI[]), endpoint:string) => {
  console.log("data", data)
  const json = JSON.stringify(data, null, 2);
  return axios.post(API_URL + endpoint, data).then((response) => {
      console.log(response)
    });
}