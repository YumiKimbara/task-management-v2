import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask, deleteTask } from "../../actions/tasks";

import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import {
  Card,
  CardActions,
  CardContent,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles((theme) =>
  createStyles({
    cardContainer: {
      display: "flex",
      justifyContent: "center",
      margin: "1rem 0",
    },
    root: {
      width: "90%",
      display: "flex",
      justifyContent: "space-between",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    cardLeft: {
      width: "100%",
      wordBreak: "break-word",
      margin: "auto 0",
      paddingLeft: "1.5rem",
      //mobile version
      [theme.breakpoints.down("sm")]: {
        padding: "8px, 8px, 8px, 15px",
      },
    },
    cardRight: {
      paddingRight: "1.5rem",
      [theme.breakpoints.down("sm")]: {
        paddingRight: "0.5rem",
      },
    },
    cardIcons: {
      margin: "0px",
    },
    checkCircleIcon: {
      color: orange[900],
    },
    StarBorderRoundedIcon: {
      cursor: "pointer",
      color: "rgba(0, 0, 0, 0.54)",
      "&:hover": {
        backgroundColor: "white",
      },
    },
    StarRoundedIcon: {
      cursor: "pointer",
      color: "#ffb703",
    },
    editIcon: {
      cursor: "pointer",
      color: "rgba(0, 0, 0, 0.54)",
    },
    labelWrapper: {
      width: "100%",
    },
    icons: {
      margin: "0px",
    },
    input: {
      padding: "0.5rem",
      width: "80%",
      border: "1px solid grey",
      borderRadius: "4px",
      //mobile version
      [theme.breakpoints.down("md")]: {
        width: "70%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "42%",
      },
      "&:focus": {
        outline: "none",
      },
    },
  })
);

const OrangeCheckbox = withStyles({
  root: {
    color: orange[700],
    "&$checked": {
      color: orange[900],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const TaskCard = ({ cardData, checkKey, setConfetti, setOpen }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state);
  const [editText, setEditText] = useState("");
  const [editingId, setEditingId] = useState("");
  const [notEditingId, setNotEditingId] = useState("");
  const [error, setError] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // change the position of a task card to 'DONE' section
  const changeToDone = (data) => {
    dispatch(
      updateTask({
        task: { ...data, isDone: true },
      })
    );
  };

  // change the position of a task card to 'UNDONE' section
  const changeToUnDone = (data) => {
    dispatch(
      updateTask({
        task: { ...data, isDone: false },
      })
    );
  };

  const changeToKeyTask = (data, isKeyTrue) => {
    dispatch(
      updateTask({
        task: { ...data, isKey: isKeyTrue },
      })
    );
  };

  // store edited text
  const editTask = useCallback((data, newText) => {
    if (!newText) return;
    dispatch(
      updateTask({
        task: { ...data, task: newText },
      })
    );
  }, []);

  const changeEditStatus = useCallback(() => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  }, []);

  const deleteTaskHandler = (data) => {
    dispatch(deleteTask(data));
    // if (homeCtx.storeTaskData.length === 1) {
    //   setConfetti(true);
    //   setOpen(true);
    // }
  };

  const checkEditing = (id) => {
    const unClikedEditButton = cardData.filter((item) => {
      return item.id !== id;
    });
    const unClikedEditId = unClikedEditButton.map((item) => {
      return item.id;
    });

    //set cards which are not editing
    setNotEditingId(unClikedEditId);

    const clikedEditButton = cardData.filter((item) => {
      return item.id === id;
    });

    const clikedEditId = clikedEditButton.map((item) => {
      return item.id;
    });

    //set a card which is editing
    setEditingId(clikedEditId);
  };

  return (
    <>
      {cardData &&
        cardData.map((data, i) => {
          if (!cardData[i]) return null;

          return (
            <div className={classes.cardContainer} key={data.id}>
              <Card className={classes.root}>
                <CardContent className={classes.cardLeft}>
                  {!checkKey && (
                    <FormControlLabel
                      className={classes.icons}
                      control={
                        //if task is done, check the checkbox
                        <OrangeCheckbox
                          disabled={isEditing ? true : false}
                          checked={data.isDone && !isEditing ? true : false}
                          name="checkedB"
                          id={data.id}
                        />
                      }
                      type="checkbox"
                      id="task"
                      name="task"
                      onClick={(e) => {
                        e.target.checked
                          ? changeToDone(data)
                          : changeToUnDone(data);
                      }}
                    />
                  )}
                  {!isEditing && <label htmlFor="task">{data.task}</label>}
                  {isEditing && cardData[i].id !== editingId && (
                    <label htmlFor="task">{data.task}</label>
                  )}
                  {isEditing && cardData[i].id === editingId && (
                    <input
                      autoFocus
                      className={classes.input}
                      type="text"
                      value={data.id === editingId.toString() && editText}
                      onChange={(e) => {
                        setEditText(e.target.value);
                        !e.target.value ? setError(true) : setError(false);
                        editTask(data, e.target.value);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          changeEditStatus();
                          setEditText(data.task);
                          checkEditing(data.id);
                          setEditingId(cardData[i].id);
                          editTask(data, e.target.value);
                        }
                      }}
                    />
                  )}
                </CardContent>
                <CardActions className={classes.cardRight}>
                  {data.isDone && !checkKey && (
                    <div className={classes.iconWrapper}>
                      <FormControlLabel
                        className={classes.icons}
                        control={
                          <Checkbox
                            disabled={isEditing ? true : false}
                            color="default"
                            onClick={() => {
                              data.isDone && deleteTaskHandler(data);
                            }}
                            icon={<DeleteIcon />}
                          />
                        }
                      />
                    </div>
                  )}
                  {!data.isDone && !checkKey && (
                    <FormControlLabel
                      className={classes.icons}
                      control={
                        <Checkbox
                          color="default"
                          disabled={
                            (notEditingId.includes(cardData[i].id) &&
                              isEditing) ||
                            error
                              ? true
                              : false
                          }
                          onClick={(e) => {
                            changeEditStatus();
                            setEditText(data.task);
                            checkEditing(data.id);
                            setEditingId(cardData[i].id);
                            editTask(data, editText);
                          }}
                          icon={
                            isEditing &&
                            !notEditingId.includes(cardData[i].id) ? (
                              <CheckCircleOutlineIcon
                                className={classes.checkCircleIcon}
                              />
                            ) : (
                              <EditIcon />
                            )
                          }
                          checkedIcon={
                            isEditing &&
                            !notEditingId.includes(cardData[i].id) ? (
                              <CheckCircleOutlineIcon
                                className={classes.checkCircleIcon}
                              />
                            ) : (
                              <EditIcon />
                            )
                          }
                        />
                      }
                    />
                  )}
                  <FormControlLabel
                    className={classes.icons}
                    control={
                      <Checkbox
                        color="default"
                        disabled={isEditing ? true : false}
                        onClick={() => {
                          changeToKeyTask(data, !data.isKey);
                        }}
                        icon={
                          !data.isKey ? (
                            <StarBorderRoundedIcon
                              className={classes.StarBorderRoundedIcon}
                            />
                          ) : (
                            <StarRoundedIcon
                              className={classes.StarRoundedIcon}
                            />
                          )
                        }
                        checkedIcon={
                          data.isKey ? (
                            <StarRoundedIcon
                              className={classes.StarRoundedIcon}
                            />
                          ) : (
                            <StarBorderRoundedIcon
                              className={classes.StarBorderRoundedIcon}
                            />
                          )
                        }
                      />
                    }
                  />
                </CardActions>
              </Card>
            </div>
          );
        })}
    </>
  );
};

export default TaskCard;
