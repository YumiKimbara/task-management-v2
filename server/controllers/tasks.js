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

export const updateTask = async (req, res) => {
  try {
    const { _id } = req.body.task;
    const { id, task, isDone, isKey } = req.body.task;

    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send(`No task with id: ${_id}`);

    const updatedTask = { id, task, isDone, isKey, _id };

    await TaskModel.findByIdAndUpdate(_id, updatedTask, { new: true });

    res
      .status(200)
      .set("Access-Control-Allow-Origin", "http://localhost:3000")
      .set("Access-Control-Allow-Credentials", "true")
      .json(updatedTask);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await TaskModel.findByIdAndRemove(id);
    res
      .status(200)
      .set("Access-Control-Allow-Origin", "http://localhost:3000")
      .set("Access-Control-Allow-Credentials", "true")
      .json({});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteAllTasks = async (req, res) => {
  try {
    await TaskModel.deleteMany({});
    res
      .status(200)
      .set("Access-Control-Allow-Origin", "http://localhost:3000")
      .set("Access-Control-Allow-Credentials", "true")
      .json({});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
