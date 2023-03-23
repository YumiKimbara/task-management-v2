import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3333" });

export const fetchTasks = () => API.get("/");

export const createTask = (newTask) => {
  API.post("/", newTask).then((res) => {
    console.log("res", res);
  });
};

export const deleteAllTasks = () => {
  API.delete("/").then((res) => {
    console.log("res", res);
  });
};
