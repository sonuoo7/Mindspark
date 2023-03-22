import React, { useState } from "react";

const StudentDashboard = () => {
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.title.trim() === "" ||
      formData.subject.trim() === "" ||
      formData.description.trim() === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }
    const studentQuestions = JSON.parse(
      localStorage.getItem("studentQuestions")
    );
    const newQuestion = {
      title: formData.title,
      subject: formData.subject,
      description: formData.description,
    };
    if (studentQuestions) {
      localStorage.setItem(
        "studentQuestions",
        JSON.stringify([...studentQuestions, newQuestion])
      );
    } else {
      localStorage.setItem("studentQuestions", JSON.stringify([newQuestion]));
    }
    alert("Question submitted successfully!");
    setFormData({
      title: "",
      subject: "",
      description: "",
    });
  };

  return (
    <div>
      <h1>Ask a Question</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Subject:</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="">-- Select Subject --</option>
            <option value="computer science">Computer Science</option>
            <option value="math">Math</option>
            <option value="english">English</option>
            <option value="science">Science</option>
          </select>
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentDashboard;
