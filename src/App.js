import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExpertDashboard from "./components/Expert/ExpertDashboard";
import StudentDashboard from "./components/Student/StudentDashboard";
import Navbar from "./pages/Navbar";
import './MainCSS.css';
import HeroPage from "./pages/HeroPage";
import Contact from "./pages/Contact";
import Ourteam from "./components/Home/Ourteam";
import LearnWithUs from "./components/Home/LearnWithUs";
import QAprogram from "./components/Home/QAprogram";
import AboutUs from "./components/Home/AboutUs";
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
                <Route exact path="/Learn-with-us" element={<LearnWithUs/>}></Route>
                <Route exact path="/our-program" element={<QAprogram/>}></Route>
                <Route exact path="/about-us" element={<AboutUs/>}></Route>

                
            </Routes>
          </Router>
        </div>
    );
};

export default App;