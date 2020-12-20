import React from 'react';
import './HeaderTitle.css';

function HeaderTitle(props) {
  return (
    <div>
      {props.timer === false ? <div className="titleActiveTimer">Вы можете вернуться к вопросу через 20 секунд</div> : <div className="title">Выполнить задание</div>}

    </div>

  );
}

export default HeaderTitle;
