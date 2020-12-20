import React from 'react';
import './CloseTest.css';

function CloseTest(props) {
  return (
    <div>
      <div className="closeTestContainer">
        <div className="testr">
          <div className="closeContainer closeContainerAnimation">
            <div className="closeText">Вы уверены, что хотите прервать прохождение задания?</div>
            <div>
              <input type="button" value="Продолжить задание" className="next" onClick={props.ProcessedTest} />

            <a href="/"><button className="close" >Прервать задание</button></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CloseTest;
