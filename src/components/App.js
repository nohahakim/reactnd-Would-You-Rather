// src/components/App.js
import React, { useEffect, Fragment } from "react";
import { connect, useDispatch } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { HashRouter, Route, Switch } from "react-router-dom"; // Changed to HashRouter
import LoadingBar from "react-redux-loading";
import NewQuestion from "./NewQuestion";
import Login from "./Login";
import Dashboard from "./Dashboard";
import QuestionPage from "./QuestionPage";
import Leaderboard from "./Leaderboard";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotFound";

const App = ({ authedUser }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <HashRouter>
      {" "}
      {/* Changed from BrowserRouter to HashRouter */}
      <Fragment>
        <LoadingBar style={{ backgroundColor: "#28a745", height: "4px" }} />
        <NavBar />
        <div className="container">
          {authedUser === null ? (
            <Login />
          ) : (
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/questions/:id" component={QuestionPage} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/404" component={PageNotFound} />
              <Route component={PageNotFound} />
            </Switch>
          )}
        </div>
      </Fragment>
    </HashRouter>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(App);
