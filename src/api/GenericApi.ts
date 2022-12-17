import { default as axios } from "axios";
import { API_URL } from "../Constants";

export const studyProgramsEndpoint = "programmes" as const
export const subjectEndpoint = "subjects" as const
export const coursesEndpoint = "courses" as const
export const profileEndpoint = "profile" as const
export const studentsEndpoint = "students" as const

export const groupsEndpoint = "groups" as const
export const studentEndpoint = "student" as const
export const gradesEndpoint = "grades" as const

export interface IStudyProgramsAPI {
  id?: number;
  name: string;
  numberOfYears: number;
}

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

export interface APIObjectGet {
  [studyProgramsEndpoint]: IStudyProgramsAPI[];
  [subjectEndpoint]: ISubjectAPI;
  [coursesEndpoint]: ICourseGetAPI[];
  [profileEndpoint]: any;
  [studentsEndpoint]: any;
  [groupsEndpoint]: any;
  [studentEndpoint]: IStudentDetailsAPI;
  [gradesEndpoint]: any;
}
export interface APIObjectPost {
  [studyProgramsEndpoint]: IStudyProgramsAPI;
  [subjectEndpoint]: ISubjectAPI;
  [coursesEndpoint]: ICoursePostAPI;
  [profileEndpoint]: any;
  [studentsEndpoint]: any;
  [groupsEndpoint]: any;
  [studentEndpoint]: IStudentDetailsAPI;
  [gradesEndpoint]: IGradePostAPI;
}

export type APIEndpoint = typeof studyProgramsEndpoint | typeof subjectEndpoint | typeof coursesEndpoint | typeof profileEndpoint | typeof studentsEndpoint | typeof groupsEndpoint | typeof studentEndpoint | typeof gradesEndpoint

export const genericApiGet = <Endpoint extends string>(apiEndpoint: Endpoint): Promise<Endpoint extends APIEndpoint ? APIObjectGet[Endpoint] : any> => {
    return axios.get(API_URL + apiEndpoint).then((response) => {
        const data = response.data;
        const dataRows: any = data.map((object:any) => {
          return Object.values(object);
        });
        return dataRows;
      });
}

export const genericApiPost = <Endpoint extends string>(data: Endpoint extends APIEndpoint ? APIObjectPost[Endpoint] : any, endpoint: Endpoint): Promise<void> => {
  return axios.post(API_URL + endpoint, data).then((response) => {
      console.log(response)
    });
}