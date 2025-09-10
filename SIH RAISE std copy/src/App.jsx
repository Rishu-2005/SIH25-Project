import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StdDashboard from "./std-dashboard/StdDashboard";
import LiveLecturePage from "./std-dashboard/LiveLecturePage";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Dashboard with all its sections (default) */}
        <Route path="/*" element={<StdDashboard />} />

        {/* Live lecture as a full separate page */}
        <Route path="/live-lecture" element={<LiveLecturePage />} />
      </Routes>
    </Router>
  );
}
