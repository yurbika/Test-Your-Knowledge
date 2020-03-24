import QuesterActionTypes from "./quester.types";

export const setQuestionFile = file => ({
  type: QuesterActionTypes.SET_QUESTION_FILE,
  payload: file
});

export const setList = object => ({
  type: QuesterActionTypes.SET_LIST_OF_ASKED_QUESTIONS,
  payload: object
});