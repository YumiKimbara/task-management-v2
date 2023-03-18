import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
  },
  button: {
    fontSize: "0.7rem",
    //mobile version
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.6rem",
      width: "20vw",
    },
  },
  addContainer: {
    padding: "0 2rem",
  },
  workspaceName: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "1rem",
    color: "#484848",
    "& h2": {
      //mobile version
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
      },
    },
  },
  addNameandButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addButton: {
    //mobile version
    [theme.breakpoints.down("sm")]: {
      width: "40px",
      height: "15px",
    },
  },
}));
