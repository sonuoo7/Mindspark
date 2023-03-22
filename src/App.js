import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/interface/Home/Home";
import About from "./Components/interface/About/About";
import Registration from "./Components/interface/Registration/Registration";
import Blog from "./Components/interface/Blog/Blog";
import Navbar from "./Components/interface/Navbar/Navbar";
import Login from "./Components/interface/Login/Login";
import StudentDashboard from "./Components/students/StudentDashbord";
import ExpertDashboard from "./Components/expert/ExpertDashboard";
import AnswerPage from "./Components/AnswerPage/AnswerPage";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/students/dashboard" element={<StudentDashboard />} />
          <Route exact path="/experts/dashboard" element={<ExpertDashboard/>} />
          <Route exact path="/answer/answer-page" element={<AnswerPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
