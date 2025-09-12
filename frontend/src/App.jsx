import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StdDashboard from "./Pages/std-dashboard/StdDashboard";
import { FacDashboard } from "./Pages/Faculty/FacDashboard";
import LiveLecturePage from "./Pages/std-dashboard/LiveLecturePage";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Dashboard with all its sections (default) */}
        <Route path="/StdDashboard" element={<StdDashboard />} />
        <Route path="/faculty/*" element={<FacDashboard />} />

        {/* Live lecture as a full separate page */}
        <Route path="/live-lecture" element={<LiveLecturePage />} />
      </Routes>
    </Router>
  );
}
