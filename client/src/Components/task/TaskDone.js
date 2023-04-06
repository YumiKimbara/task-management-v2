import React, { useContext } from "react";
import { useSelector } from "react-redux";

import TaskCard from "./TaskCard";

import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    taskDone: {
      color: "#484848",
      padding: "0 2rem",
      paddingTop: "1rem",
      //mobile version
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
      },
    },
  })
);

const TaskDone = ({ setConfetti, setOpen }) => {
  const classes = useStyles();

  const tasks = useSelector((state) => state);

  const checkDone =
  tasks && tasks.map((task) => task.isDone);

  return (
    <>
      {checkDone.includes(true) && (
        <div>
          <h2 className={classes.taskDone}>DONE</h2>
          <TaskCard
            setConfetti={setConfetti}
            setOpen={setOpen}
            cardData={
              tasks &&
              tasks.filter((task) => task.isDone)
            }
          />
        </div>
      )}
    </>
  );
};

export default TaskDone;
