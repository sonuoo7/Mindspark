import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExpertDashboard from "./components/Expert/ExpertDashboard";
import StudentDashboard from "./components/Student/StudentDashboard";
import Navbar from "./pages/Navbar";
import './MainCSS.css';
import HeroPage from "./pages/HeroPage";
import Contact from "./pages/Contact";
import Ourteam from "./pages/Ourteam";

const App = () => {
    return (
        <div>
          <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<HeroPage />}></Route>
                <Route exact path="/student/dashboard" element={<StudentDashboard />}></Route>
                <Route exact path="/expert/dashboard" element={<ExpertDashboard />}></Route>
                <Route exact path="/contact" element={<Contact />}></Route>
                <Route exact path="/ourteam" element={<Ourteam/>}></Route>
                
            </Routes>
          </Router>
        </div>
    );
};

export default App;