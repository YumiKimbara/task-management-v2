import express from "express";
import { getTasks, createTask, deleteAllTasks } from "../controllers/tasks.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.delete("/", deleteAllTasks);

export default router;
