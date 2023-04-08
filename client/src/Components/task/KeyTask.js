import { useSelector } from "react-redux";

import TaskCard from "./TaskCard";

import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    keyTaskDone: {
      color: "#484848",
      padding: "0 2rem",
    },
    noKeyTaskMessage: {
      textAlign: "center",
      paddingTop: "10rem",
    },
  })
);

const KeyTask = ({ checkKey }) => {
  const classes = useStyles();

  const tasks = useSelector((state) => state);

  const noKeyTask =
    tasks && tasks.every((task) => {
      return !task.isKey;
    });

  return (
    <>
      {tasks && (
        <div>
          <h2 className={classes.keyTaskDone}>KEY TASK</h2>
          <TaskCard
            checkKey={checkKey}
            cardData={tasks.filter((task) => task.isKey)}
          />
        </div>
      )}
      {noKeyTask && (
        <div className={classes.noKeyTaskMessage}>
          <p>KEY TASK DOES'NT EXIST</p>
        </div>
      )}
    </>
  );
};

export default KeyTask;
