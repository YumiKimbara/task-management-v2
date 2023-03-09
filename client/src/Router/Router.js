import React, { useState } from "react";

import Home from "../Components/Home";
import Header from "../Components/layout/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "1rem",
      marginLeft: "5rem",
      marginRight: "5rem",
      flexDirection: "column",
    },
  })
);

const AppRouter = () => {
  const [checkKey, setCheckKey] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Router>
        <Header checkKey={checkKey} setCheckKey={setCheckKey} />
        <Switch>
          <div className={classes.container}>
            <Route path="/" exact component={Home} />
            <Route
              path="/Home"
              exact
              render={(props) => <Home checkKey={checkKey} {...props} />}
            />
          </div>
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
