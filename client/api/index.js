import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3333" });

export const fetchTasks = () => API.get("/");

export const createTask = (newTask) => {
  return API.post("/", newTask)
};

export const deleteAllTasks = () => {
  return API.delete("/").then((res) => {
    console.log("res", res);
  });
};
