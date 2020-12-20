import React from 'react';
import './CorrectTest.css';

function CorrectTest(props) {
  return (
    <div>
      <div className="closeTestContainer">

        <div className="correctCloseContainer">
          <img src="/correct.png" className="imgCorrect" />
          <div className="correctTest">Вы успешно прошли задание!</div>
         <a href="/"><button className="currentTestButton"> Вернуться на главную</button></a> 
        </div>

      </div>
    </div>
  );
}

export default CorrectTest;
