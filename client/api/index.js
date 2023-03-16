import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3333" });

export const fetchTasks = () => API.get("/");

export const createTask = (newTask) => {
  console.log("newTask", newTask);
  API.post("/", newTask).then((res) => {
    console.log("res", res);
  });
};
