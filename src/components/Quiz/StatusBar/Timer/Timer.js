import React from 'react';
import './Timer.css';

function Timer(props) {
  return (
    <div>

      <div>
        <div>

          <div className="timerContainetr">
            <div className="eclipseContainer">
              <div className="elipse_1" />
              <div className="elipse_2" />
              <div className="elipse_3" />
              <div className="elipse_4" />
              <div className="elipse_5" />
              <div className="elipse_6" />
              <div className="elipse_7" />
              <div className="elipse_8" />
              <div className="elipse_9" />
            </div>

          </div>

          <div className="timeContainer"><div className="timetTitle">{props.count}</div></div>
        </div>
      </div>

    </div>

  );
}

export default Timer;
