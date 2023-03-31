import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  EDIT_STATUS,
  UPDATE_TASK
} from "../constants/actionTypes";
import * as api from "../../api";
import type { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

export const getTasks =
  () => async (dispatch: ThunkDispatch<String[], void, Action>) => {
    try {
      const { data } = await api.fetchTasks();
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      //return error if it is the instance of Error class
      if (error instanceof Error) console.error(error.message);
    }
  };

export const createTask =
  (task: any) => async (dispatch: ThunkDispatch<any, void, Action>) => {
    try {
      const { data } = await api.createTask(task);
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      if (error instanceof Error) console.error(error);
    }
  };

export const updateTaskStatus =
  (status: boolean) => async (dispatch: ThunkDispatch<any, void, Action>) => {
    try {
      // const response = await api.createTask(task);
      dispatch({ type: EDIT_STATUS, payload: status });
    } catch (error) {
      if (error instanceof Error) console.error(error);
    }
  };

export const updateTask =
  (task: any) => async (dispatch: ThunkDispatch<any, void, Action>) => {
    try {
      const { data } = await api.updateTask(task);
      dispatch({ type: UPDATE_TASK, payload: data.task });
    } catch (error) {
      if (error instanceof Error) console.error(error);
    }
  };

export const deleteAllTasks =
  () => async (dispatch: ThunkDispatch<any, void, Action>) => {
    try {
      await api.deleteAllTasks();
      dispatch({ type: DELETE, payload: "" });
    } catch (error) {
      if (error instanceof Error) console.error(error);
    }
  };
