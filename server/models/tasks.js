import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  id: String,
  task: String,
  isEditing: Boolean,
  isDone: Boolean,
  isKey: Boolean,
});

const TaskModel = mongoose.model("TaskModel", taskSchema);

export default TaskModel;
