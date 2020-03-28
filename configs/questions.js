import {QuestionType} from "../components/question";

export const questions = [
  { question: "Name", qKey: "name", type: QuestionType.text },
  { question: "Pincode", qKey: "pincode", type: QuestionType.text },
  { question: "Do you have fever?", options: ["Yes", "No"], qKey: "feverTemp", type: QuestionType.options }
];
