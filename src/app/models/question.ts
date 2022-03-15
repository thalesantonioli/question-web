import { Quiz } from "./quiz";

export interface Question {
    id: number;
    quiz: Quiz;
    question: string;
    freeText: boolean
}