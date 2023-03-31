import express from "express";
import { getTasks, createTask, updateTask, deleteAllTasks } from "../controllers/tasks.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/", updateTask);
router.delete("/", deleteAllTasks);

export default router;
