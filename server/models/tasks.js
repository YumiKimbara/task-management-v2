import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: String,
});

const TaskModel = mongoose.model("TaskModel", taskSchema);

export default TaskModel;
