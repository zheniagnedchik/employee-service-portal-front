import React from 'react'
import './PersonalInfo.css'

function PersonalInfo(){
    return(
        <div>
            <div className="PersonalInfo">
                <div className="PersonalImgInfo"><img src="/ProfileInfo.png"/></div>
                <div className="info">
                    <ul>
                        <li className="listInfo"><div><img src="/personalImg/5.png"/></div><div className="textInfo"><p>Иванова Мария Сергеевна</p></div></li>
                        <li className="listInfo"><div><img src="/personalImg/4.png"/></div><div className="textInfo"><p>Главный бухгалтер</p></div></li>
                        <li className="listInfo"><div><img src="/personalImg/3.png"/></div><div className="textInfo"><p>+375336046610</p></div></li>
                        <li className="listInfo"><div><img src="/personalImg/2.png"/></div><div className="textInfo"><p>ivanova1989@gmail.com</p></div></li>
                        <li className="listInfo"><div><img src="/personalImg/1.png"/></div><div className="textInfo"><p>г. Минск ул. Мястровская 4 </p></div></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default PersonalInfo