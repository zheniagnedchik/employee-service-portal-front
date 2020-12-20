import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
      <div className="headerContain">
        <div className="logo"><img src="/logo.png" /></div>
        <div className="headerText">Сервисный портал работника</div>
        <div className="imgProfile"><img src="/profile.png" /></div>
      </div>
      <div className="headerLine" />
    </div>
  );
}

export default Header;
