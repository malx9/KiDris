import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import LoginPage from "./views/LoginPage";
import DriverView from "./views/DriverView";
import AdminPanel from "./views/AdminPanel";
import KitchenPage from "./views/KitchenPage";

function App() {
  return (
    <Router>
      <CookiesProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/driver" element={<DriverView />} />
          <Route path="/kitchen" element={<KitchenPage />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </CookiesProvider>
    </Router>
  );
}

export default App;
