import { API_URL } from "../Constants";
import { default as axios } from "axios";
import { studyProgramsEndpoint } from "./GenericApi";


export interface IStudyProgramsAPI {
    id?: number,
    name: string,
    numberOfYears: number
}

export const studyProgramsPOST = (data:IStudyProgramsAPI) => {
    return axios.post(API_URL + studyProgramsEndpoint, data).then((response) => {
        console.log(response)
      });
}