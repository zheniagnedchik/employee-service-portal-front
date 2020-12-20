import React from 'react';
import StatusBarHead from './statusBarHead/StatusBarHead';
import Timer from './Timer/Timer';

function StatusBar(props) {
  return (
    <div>
      {props.timer ? <StatusBarHead numberQuestions={props.numberQuestions} /> : <Timer count={props.count} />}

    </div>

  );
}

export default StatusBar;
