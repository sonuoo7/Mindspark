import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ExpertDashboard = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const studentQuestions =
      JSON.parse(localStorage.getItem("studentQuestions")) || [];
    setQuestions(studentQuestions);
  }, []);

  const history = useNavigate();

  const handleAnswer = (questionIndex) => {
    history(`/answer/answer-page`);
  };

  const handleGiveAnswer = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answered = true;
    setQuestions(updatedQuestions);
    localStorage.setItem("studentQuestions", JSON.stringify(updatedQuestions));
    handleAnswer(questionIndex);
  };

  return (
    <div>
      <h1>Expert Dashboard</h1>
      <div>
        <h2>Student Questions</h2>
        {questions.length === 0 ? (
          <p>No questions to display.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Subject</th>
                <th>Description</th>
                <th>Answer</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question, index) => (
                <tr key={index}>
                  <td>{question.title}</td>
                  <td>{question.subject}</td>
                  <td>{question.description}</td>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: question.answered ? question.answer : "-",
                    }}
                  >
                  </td>
                  <td>
                    {!question.answered ? (
                      <button onClick={() => handleGiveAnswer(index)}>
                        Give Answer
                      </button>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ExpertDashboard;
