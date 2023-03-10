import mongoose from "mongoose";
import TaskModel from "../models/tasks.js";

export const getTasks = async (req, res) => {
  try {
    const taskData = await TaskModel.find();
    res.status(200).json(taskData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
