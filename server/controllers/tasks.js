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

export const createTask = async (req, res) => {
  // get task data
  const task = req.body;
  // create task model instance
  const newTask = new TaskModel({
    ...task,
    // creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    // save new task data to the database
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
