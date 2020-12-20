import React from 'react'
import './PersonalNav.css'

function PersonalNav(){
    return(
    
            <div className="nav">
                <div className="navHeader">
                    <img className="logoNav" src="/logo.png"/>
                    <div className="titleNav">Сервисный портал работника</div>
                </div>
                <div className="navMenu">
                       
                       <ul className="navMenu">
                           <li><p><a href="/quiz"> Мои знания техники безопасности</a></p></li>
                           <li><p><a href="/rating">Мои оценки</a></p></li>
                           <li><p>Мои справки</p></li>
                           <li><p>Мои инициативы</p></li>
                           <li><p>Нaстройки</p></li>
                       </ul>
                       
                    
                </div>
            </div>
        
        
    )
}


export default PersonalNav