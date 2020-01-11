import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  getValues,
  postValues,
  deleteValues
} from "./store/actions/values.actions";

import PrivateRoute from "./PrivateRoute";

import Header from "./components/header/Header.component";
import SignInAndUpPage from "./pages/sign-in-and-up/SignInAndUpPage";
import HomePage from "./pages/homepage/HomePage.page";
import ValuesSelectionPage from "./pages/values-selection/ValuesSelectionPage.component";
import ChoiceExplanation from "./components/choice-explanation/ChoiceExplanationForm.component";
import ProjectForm from "./components/project-form/ProjectForm.component";

import { Globals } from "./globals/GlobalStyles";
// import { values } from "./dummy-data";

import "./App.css";
import EditProfile from "./components/edit-forms/EditProfile.component";
import EditValuesPage from "./pages/edit-values/EditValuesPage";
function App() {
  const welcome = useSelector(state => state.login.welcome);

  const dispatch = useDispatch();

  useEffect(() => {
    // values.map(val => dispatch(postValues({ name: val.value })));
    dispatch(getValues());
  });

  return (
    <Router>
      <Globals />
      {welcome || localStorage.getItem("token") ? (
        <Header />
      ) : (
        <SignInAndUpPage />
      )}
      <Switch>
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute
          path="/values-selection"
          component={ValuesSelectionPage}
        />
        <PrivateRoute path="/choice-expl" component={ChoiceExplanation} />
        <PrivateRoute path="/project-form" component={ProjectForm} />
        <PrivateRoute path="/edit-profile" component={EditProfile} />
        <PrivateRoute path="/edit-values" component={EditValuesPage} />
      </Switch>
    </Router>
  );
}

export default App;
