import axios from "axios";

export const fetchTasks = () => axios.get("/");

export const createTask = (newTask) => {
  console.log("newTask", newTask);
  axios.post("/", newTask).then((res) => {
    console.log("res", res);
  });
};
