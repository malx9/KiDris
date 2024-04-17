import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import DriverView from "./views/DriverView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/driver" element={<DriverView />} />
      </Routes>
    </Router>
  );
}

export default App;
