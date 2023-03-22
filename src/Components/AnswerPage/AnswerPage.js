import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AnswerPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!answer.trim()) {
      alert("Please enter your answer");
      return;
    }
    const questions = JSON.parse(localStorage.getItem("studentQuestions"));
    const questionIndex = questions.findIndex((q) => q.id === id);
    questions[questionIndex].answer = answer;
    localStorage.setItem("studentQuestions", JSON.stringify(questions));
    navigate("/experts/dashboard");
  };

  return (
    <div>
      <h1>Answer Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Question ID: {id}</h2>
        </div>
        <div>
          <h2>Answer</h2>
          <ReactQuill value={answer} onChange={setAnswer} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AnswerPage;
