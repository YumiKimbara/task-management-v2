import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
import * as api from "../../api";
import type { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

export const getTasks =
  () => async (dispatch: ThunkDispatch<String[], void, Action>) => {
    try {
      const { data } = await api.fetchTasks();
      console.log("getTasks data", data);
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      //return error if it is the instance of Error class
      if (error instanceof Error) console.error(error.message);
    }
  };

export const createTask =
  (task: any) => async (dispatch: ThunkDispatch<any, void, Action>) => {
    try {
      const response = await api.createTask(task);
      dispatch({ type: CREATE, payload: response });
    } catch (error) {
      if (error instanceof Error) console.error(error);
    }
  };

export const deleteAllTasks =
  () => async (dispatch: ThunkDispatch<any, void, Action>) => {
    try {
      dispatch({ type: DELETE, payload: "" });
    } catch (error) {
      if (error instanceof Error) console.error(error);
    }
  };
