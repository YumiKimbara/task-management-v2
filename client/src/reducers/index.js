import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  FAVORITE,
} from "../constants/actionTypes";

export default (tasks = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    default:
      return tasks;
  }
};
