import {
  FETCH_ALL,
  CREATE,
  DELETE,
  DELETE_ALL,
  UPDATE_TASK,
} from "../constants/actionTypes";

export default (tasks = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...tasks, action.payload];
    case UPDATE_TASK:
      return tasks.map((task) => {
        return task.id === action.payload.id ? action.payload : task;
      });
    case DELETE:
      return tasks.filter((task) => task._id !== action.payload._id);
    case DELETE_ALL:
      return {
        ...state,
        tasks: [],
      };
    default:
      return tasks;
  }
};
