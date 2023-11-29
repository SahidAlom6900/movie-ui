import RegistrationPage from "./pages/RegistrationPage";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MovieDashboard from "./pages/MovieDashboard";
import TicketPage from "./pages/TicketPage";
import AlertComponent from "./components/atom/AlertComponent";

function App() {
  return (
    <Routes>
      {/* <Route  path="/" r /> */}
      <Route path="/movie" element={<MovieDashboard />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
