import express from "express";
import {
  getTasks,
  createTask,
  updateTask,
  // deleteTask,
  deleteAllTasks,
} from "../controllers/tasks.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/", updateTask);
// router.delete("/", deleteTask);
router.delete("/", deleteAllTasks);

export default router;
