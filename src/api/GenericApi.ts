import { default as axios } from "axios";
import { IStudyProgramsAPI } from "../components/AddStudyProgramModal";
import { API_URL } from "../Constants";

export const studyProgramsEndpoint = "programmes"
export const subjectEndpoint = "subjects"
export const coursesEndpoint = "courses"
export const profileEndpoint = "profile"
export const studentsEndpoint = "students"

export const groupsEndpoint = "groups"
export const studentEndpoint = "student"
export const gradesEndpoint = "grades"

export interface IStudentDetailsAPI {
  firstName: string;
  lastName: string;
  email: string;
  group: IGroupAPI;
}

export interface IGroupAPI {
  groupCode: number;
}

export interface ISubjectAPI {
  name:string;
  creditCount:number;
}

export interface ICoursePostAPI {
  professorName:string;
  subjectId:number;
  calendarYearName:string;
}

export interface ICourseGetAPI {
  subject:ISubjectAPI;
  professorName:string;
  calendarYearName:string;
}

export interface IGradePostAPI {
  studentId: number;
  courseId: number;
  grade: number;
}

export type APIObjectGet = IStudyProgramsAPI | ISubjectAPI | IStudentDetailsAPI[] | ICourseGetAPI | null;
export type APIObjectPost = IStudyProgramsAPI | ISubjectAPI | IStudentDetailsAPI[] | ICoursePostAPI | IGradePostAPI  | null;

export const genericApiGet = (apiEndpoint:string) => {
    return axios.get(API_URL + apiEndpoint).then((response) => {
        const data = response.data;
        const dataRows: any = data.map((object:any) => {
          return Object.values(object);
        });
        return dataRows;
      });
}

export const genericApiPost = (data:APIObjectPost, endpoint:string) => {

  const json = JSON.stringify(data, null, 2);
  return axios.post(API_URL + endpoint, data).then((response) => {
      console.log(response)
    });
}