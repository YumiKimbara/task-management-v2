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
    case DELETE_ALL:
      // return tasks.filter((task) => task._id !== action.payload);
      return {
        ...state,
        tasks: [],
      };
    // case DELETE:
    //   return tasks.filter((task) => task._id !== action.payload.id);
    default:
      return tasks;
  }
};
