import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  DELETE_ALL,
  UPDATE_TASK,
  FAVORITE,
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
    // return {
    //   ...tasks,
    //   storeTaskData: tasks.storeTaskData.map((taskData) => {
    //     if (action.payload.data.id === taskData.id) {
    //       // return previous task data. also update isKey part
    //       return {
    //         ...taskData,
    //         task: action.payload.data.task,
    //         // isEdit: action.payload.edit,
    //       };
    //     }
    //     return taskData;
    //   }),
    // };
    case DELETE:
      return tasks.filter((task) => task._id !== action.payload);
    case DELETE_ALL:
      return tasks.filter((task) => task._id !== action.payload);
    default:
      return tasks;
  }
};
