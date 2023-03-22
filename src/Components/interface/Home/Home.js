import React from "react";
import './Home.css'
const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to our Learning Platform</h1>
      <p className="home-description">
        We provide a variety of courses to help you achieve your learning goals.
        Whether you're a student looking to expand your knowledge or an expert
        looking to share your expertise, we have something for everyone.
      </p>
      <div className="home-button-container">
        <button className="home-button">Become an Expert</button>
        <button className="home-button">Student Login</button>
      </div>
    </div>
  );
};

export default Home;
