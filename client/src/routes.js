import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import AuthPage from "./pages/AuthPage/AuthPage";
import MainPage from "./pages/MainPage/MainPage";

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/main">
          <MainPage />
        </Route>
        <Redirect to="/main" />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }
};
