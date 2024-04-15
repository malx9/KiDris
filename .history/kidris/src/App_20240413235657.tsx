import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/LoginPage" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;