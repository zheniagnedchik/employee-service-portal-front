import React from 'react';
import './StatusBarHead.css';
import classnames from 'classnames';

function StatusBarHead(props) {
  return (
    <div>
      <div>
        <div className="containerNavNone">
          <img src="/statusBar.png" className={classnames('statusBarImg', { animNextQestion_2: props.numberQuestions === 1 }, { animNextQestion_3: props.numberQuestions === 2 })} />
          <ul className="containerNav">

            <li className="navStatusBar">1</li>
            <li className="navStatusBar">2</li>
            <li className="navStatusBar">3</li>

          </ul>

        </div>

      </div>

    </div>

  );
}

export default StatusBarHead;
