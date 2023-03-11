import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/layout/Header";
import Home from "./Components/Home";

import { createStyles, makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(() =>
//   createStyles({
//     basicStyle: {
//       minHeight: "calc(100vh - 130px)",
//       display: "flex",
//       justifyContent: "top",
//       paddingTop: "30px",
//       paddingBottom: "30px",
//       flexDirection: "column",
//       backgroundColor: "#f0efeb",
//     },
//   })
// );

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

const App = () => {
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

export default App;
