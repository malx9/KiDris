import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router>
      <LoginPage></LoginPage>
    </Router>
  );
}

export default App;
