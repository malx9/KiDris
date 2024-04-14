import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={LoginPage} />
    </Routes>
  );
}

export default App;
