import React from 'react'
import './PersonalHeader.css'

function PersonalHeader(){

    return(
        <div className="PersonalHeader">
            <div className="personalHeaderContain">
            <div className="notification"><img src="/notification.png"/></div>
            <div className="PersonalImg"><img src="/profile.png" /></div>
            <div className="headerInfo">
                <div className="headerName">Иванова Мария Сергеевна</div>
                <div className="headerProf">Главный бухгалтер</div>
            </div>
            </div>
            
            
        </div>

    )
}

export default PersonalHeader