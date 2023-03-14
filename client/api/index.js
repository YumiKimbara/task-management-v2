import axios from "axios";

export const fetchTasks = () => axios.get("/");

export const createTask = (newTask) => axios.post("/", newTask);
