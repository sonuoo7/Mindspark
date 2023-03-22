import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "",
  });

  const history = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = JSON.parse(localStorage.getItem("studentData"));
    const expertData = JSON.parse(localStorage.getItem("expertData"));

    let userData;

    if (formData.userType === "student" && studentData) {
      userData = studentData.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );
    } else if (formData.userType === "expert" && expertData) {
      userData = expertData.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );
    }

    if (userData) {
      alert("Login successful!");
      if (formData.userType === "student") {
        history("/students/dashboard"); // Redirect to student dashboard route
      } else if (formData.userType === "expert") {
        history("/experts/dashboard"); // Redirect to expert dashboard route
      }
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
            value={formData.userType}
            name="userType"
            onChange={handleChange}
          >
            <option value="">-- Select User Type --</option>
            <option value="student">Student</option>
            <option value="expert">Expert</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
