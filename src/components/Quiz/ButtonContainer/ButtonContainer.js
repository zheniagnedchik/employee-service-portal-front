import React from 'react';
import './ButtonContainer.css';

function NextQuestion(props) {
  return (
    <div className="buttonContainer">
      <div>
        {props.timer ? <button onClick={props.nextQuestion} disabled={props.truAnswer} className="nextQuestion">Следующий вопрос</button>
          : <button onClick={props.backToQuestion} disabled={props.checked === false} className="nextQuestion">Вернуться к вопросу</button>}
      </div>
      <div>
        <button className="closeTest" onClick={props.Close}>Завершить задание</button>
      </div>

    </div>

  );
}

export default NextQuestion;
