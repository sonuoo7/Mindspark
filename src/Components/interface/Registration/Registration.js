import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import './Registration.css'

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    userType: "",
    subject: "",
    profession: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }
    // Store student data in localStorage
    if (formData.userType === "student") {
      const studentData = JSON.parse(localStorage.getItem("studentData")) || [];
      studentData.push(formData);
      localStorage.setItem("studentData", JSON.stringify(studentData));
    }
    // Store expert data in localStorage
    else if (formData.userType === "expert") {
      const expertData = JSON.parse(localStorage.getItem("expertData")) || [];
      expertData.push(formData);
      localStorage.setItem("expertData", JSON.stringify(expertData));
    }
    alert("Registration successful!");
    navigate("/login"); // replace with your login page URL
  };


  const validateForm = (data) => {
    const errors = [];
    if (!data.name.trim()) {
      errors.push("Name is required.");
    }
    if (!data.email.trim()) {
      errors.push("Email is required.");
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.push("Invalid email address.");
    }
    if (!data.password.trim()) {
      errors.push("Password is required.");
    }
    if (!data.userType) {
      errors.push("User type is required.");
    } else if (data.userType === "student" && !data.subject.trim()) {
      errors.push("Subject is required for student.");
    } else if (data.userType === "expert" && !data.profession.trim()) {
      errors.push("Profession is required for expert.");
    }
    return errors;
  };

  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    // window.location.href="/login"
  };

  return (
    <div>
      {showLogin ? (
        <Login/>
      ) : (
        <div>
          <h1>Registration</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>User Type:</label>
              <select
                name="userType"
                value={formData.userType}
                onChange={handleChange}
              >
                <option value="">Select User Type</option>
                <option value="student">Student</option>
                <option value="expert">Expert</option>
              </select>
            </div>
            {formData.userType === "student" && (
              <div>
                <label>Subject:</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            )}
            {formData.userType === "expert" && (
              <div>
                <label>Profession:</label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                />
              </div>
            )}
            <button type="submit" >Register</button>
            <br />
            <span>Already have an account?</span>{" "}
            <button type="button" onClick={handleLoginClick}>
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Registration;