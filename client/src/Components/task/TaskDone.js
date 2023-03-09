import React, { useContext } from "react";
import HomeContext from "../../Context/HomeContext";

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
  const homeCtx = useContext(HomeContext);
  const classes = useStyles();

  if (!homeCtx) return;

  const checkDone =
    homeCtx.storeTaskData && homeCtx.storeTaskData.map((data) => data.isDone);

  return (
    <>
      {checkDone.includes(true) && (
        <div>
          <h2 className={classes.taskDone}>DONE</h2>
          <TaskCard
            setConfetti={setConfetti}
            setOpen={setOpen}
            cardData={
              homeCtx.storeTaskData &&
              homeCtx.storeTaskData.filter((item) => item.isDone)
            }
          />
        </div>
      )}
    </>
  );
};

export default TaskDone;
