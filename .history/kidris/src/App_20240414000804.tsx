import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Routes>
      <Router>
        <Route path="/login" element={LoginPage} />
      </Router>
    </Routes>
  );
}

export default App;
