import React, { useContext, useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// import HomeContext from "../../Context/HomeContext";
import { createTask, getTasks, deleteAllTasks } from "../../actions/tasks";

import TaskCard from "./TaskCard";

import { v4 as uuidv4 } from "uuid";

import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import { Button, TextField, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import useStyles from "./styles";
import { TaskSharp } from "@mui/icons-material";

const OrangeButton = withStyles({
  root: {
    backgroundColor: orange[900],
    color: "white",
    "&:hover": {
      backgroundColor: orange[900],
      color: "white",
    },
  },
})((props) => <Button {...props} />);

const OrangeFab = withStyles({
  root: {
    backgroundColor: orange[900],
    color: "white",
    "&:hover": {
      backgroundColor: orange[900],
      color: "white",
    },
  },
})((props) => <Fab {...props} />);

const OrangeTextField = withStyles({
  root: {
    "& .MuiInput-underline:after": {
      borderBottomColor: orange[900],
    },
  },
})((props) => <TextField {...props} />);

const AddNewTask = ({ checkKey, setConfetti, setOpen }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state);

  console.log("tasks", tasks)

  const [error, setError] = useState(false);
  const [taskText, setTaskText] = useState("");

  // when task cards changed, set card's info to local strage
  // useEffect(() => {
  //   localStorage.setItem("task", JSON.stringify(homeCtx.storeTaskData));
  // }, [homeCtx.storeTaskData]);

  const taskTextHandler = useCallback((e) => {
    setTaskText(e.target.value);
  }, []);

  const createNewTask = useCallback(
    (e) => {
      //if text in the input is empty, show error message
      if (taskText.trim() === "") {
        setError(true);
        return;
      }
      //if text in the input is not empty, store task with Redux
      dispatch(
        createTask({
          id: uuidv4(),
          task: taskText,
          isEditing: false,
          isDone: false,
          isKey: false,
        })
      );
      setTaskText("");
    },
    [taskText]
  );

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  const deleteAllTasksHandler = useCallback(() => {
    dispatch(deleteAllTasks());
    dispatch(getTasks());
  }, []);

  return (
    <>
      <div className={classes.addContainer}>
        <div className={classes.addNameandButton}>
          <div className={classes.workspaceName}>
            <h2>CREATE YOUR TASK</h2>
          </div>
          <div>
            {tasks.length === 0 ? (
              <Button disabled variant="contained" className={classes.button}>
                {" "}
                Delete this workplace
              </Button>
            ) : (
              <OrangeButton
                variant="contained"
                className={classes.button}
                onClick={(e) => {
                  e.preventDefault();
                  deleteAllTasksHandler();
                }}
              >
                Delete this workplace
              </OrangeButton>
            )}
          </div>
        </div>
        <form
          className={classes.root}
          // onChange={taskTextHandler}
          onKeyDown={(e) => {
            // if (e.key === "Enter" && !homeCtx.isEditing) return;
            if (e.key !== "Enter") return;
            createNewTask();
          }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <OrangeFab
            size="small"
            aria-label="add"
            className={classes.addButton}
            onClick={createNewTask}
            // onClick={!homeCtx.isEditing && createTask}
          >
            <AddIcon />
          </OrangeFab>
          {error ? (
            <TextField
              value={taskText}
              error
              fullWidth
              helperText="Type your task"
              onChange={(e) => {
                setError(false);
                taskTextHandler(e);
              }}
            />
          ) : (
            <OrangeTextField
              value={taskText}
              style={{ margin: 8 }}
              placeholder="ADD A NEW TASK HERE"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                taskTextHandler(e);
              }}
            />
          )}
        </form>
      </div>
      <div className={classes.card}>
        <TaskCard
          cardData={
            //if there is a task card, and key is not checked, show task card which is not done and key is not checkd
            //if there is a task card, and key is checked, show task card which is not done and key is checked.
            // homeCtx.storeTaskData && !checkKey
            //   ? homeCtx.storeTaskData.filter((item) => !item.isDone)
            //   : homeCtx.keyTaskPage
            //   ? homeCtx.storeTaskData.filter(
            //       (item) => !item.isDone && item.isKey
            //     )
            //   : ""
            tasks
          }
          setConfetti={setConfetti}
          setOpen={setOpen}
        />
      </div>
    </>
  );
};

export default AddNewTask;
