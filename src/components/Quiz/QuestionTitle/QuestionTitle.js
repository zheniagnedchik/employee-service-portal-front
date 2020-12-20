import React from 'react';
import './QuestionTitle.css';

function QuestionTitle(props) {
  return (
    <div>
      {props.questions.map((question) => (
        <div key={question.id} className="qestionTitle">{question.question}</div>
      ))}
    </div>
  );
}

export default QuestionTitle;
