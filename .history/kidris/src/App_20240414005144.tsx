import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
