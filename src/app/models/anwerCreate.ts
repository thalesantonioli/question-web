import { Anwser } from "./answer";

export interface AnwserCreate {
    patientId: string;
    quizId: number;
    answerDTOList: Anwser[];
}