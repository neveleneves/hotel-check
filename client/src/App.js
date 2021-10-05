import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "./routes";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.auth.user);
  const routes = useRoutes(Object.keys(user).length === 0 ? false : true);

  return (
    <BrowserRouter>
      <div className="App">{routes}</div>
    </BrowserRouter>
  );
}

export default App;
