import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3333" });

export const fetchTasks = () => API.get("/");

export const createTask = (newTask) => API.post("/", newTask);

export const updateTask = (updatedTask) => API.patch("/", updatedTask);

export const deleteTask = (id) => API.delete(`/${id}`);

export const deleteAllTasks = () => API.delete("/");
