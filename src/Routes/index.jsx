import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Cadastro } from "../page/Cadastro/index";
import { Login } from "../page/Login";
import { Dashboard } from "../page/Dashboard";
import { Container } from "../Styles/Container";

export const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>

      <Route exact path="/cadastro">
        <Cadastro
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>

      <Route exact path="/dashboard">
        <Container></Container>
        <Dashboard
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
    </Switch>
  );
};
