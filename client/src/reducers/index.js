import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  EDIT_TASK,
  EDIT_STATUS,
  FAVORITE,
} from "../constants/actionTypes";

export default (tasks = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...tasks, action.payload];
    case EDIT_TASK:
      return {
        ...tasks,
        storeTaskData: tasks.storeTaskData.map((taskData) => {
          if (action.payload.data.id === taskData.id) {
            // return previous task data. also update isKey part
            return {
              ...taskData,
              task: action.payload.data.task,
              // isEdit: action.payload.edit,
            };
          }
          return taskData;
        }),
      };
    case EDIT_STATUS:
      return { ...tasks, isEditing: action.payload };
    case DELETE:
      return tasks.filter((task) => task._id !== action.payload)
    default:
      return tasks;
  }
};
