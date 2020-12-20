import React from 'react';
import './CorrectStatusBar.css';

function CorrectStatusBar() {
  return (
    <div>
      <div className="statusBarCoorect">
        <div className="containerCorrectBack" />
        <div className="containerCorrect">
          <div>
            <div><img src="/statusBar.png " className="statusBarImgCorrect" /></div>
            <div className="statusBarLi">1</div>
          </div>
          <div>
            <div><img src="/statusBar.png " className="statusBarImgCorrect" /></div>
            <div className="statusBarLi">2</div>
          </div>
          <div>
            <div><img src="/statusBar.png " className="statusBarImgCorrect" /></div>
            <div className="statusBarLi">3</div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default CorrectStatusBar;
