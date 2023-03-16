import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  id: String,
  isDone: Boolean,
  isKey: Boolean,
  task: String,
});

const TaskModel = mongoose.model("TaskModel", taskSchema);

export default TaskModel;
