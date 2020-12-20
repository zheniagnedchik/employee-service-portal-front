import React from 'react'
import './RangeContainer.css'
import classnames from 'classnames'
import img from './1.png'
import arrow from './arrow.png'


const RangeContainer=(props)=>{
 
    return(
        <div className="containerRange">
        <div className="selectContain">
            <select className="select">{props.role}</select>
            <div className="bgi"
        style={{
         backgroundImage: `url(${arrow})`,
         backgroundPosition: 'center',
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat'
         }}></div>
        
        </div>
        <div className="whatToEvaluate">
            <span className="text">Пожалуйста, оцените качество управления , где</span>
            <span className="numberRed">1</span>-
            <span className="textRed">низкая оценка</span>,
            <span className="numberGreen">5</span>-
            <span className="textGreen">высокая</span>
        </div>
        <div className="estimatesContainer">
            <div className={classnames("estimates",{"active_1":props.active_1})}><div>1</div></div>
            <div className={classnames("estimates",{"active_2":props.active_2})}><div>2</div></div>
            <div className={classnames("estimates",{"active_3":props.active_3})}><div>3</div></div>
            <div className={classnames("estimates",{"active_4":props.active_4})}><div>4</div></div>
            <div className={classnames("estimates",{"active_5":props.active_5})}><div>5</div></div>
        </div>
        <div className="main">       
     <input
     type="range"
     min="0"
     max="100"
     value={props.value}
     onChange={props.handleChange}
     id="slider"/>
     <div className="test">
     <div id="selector">
         <div className="selectBtn" style={{
             backgroundImage: `url(${img})`,
             backgroundPosition: 'center',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
             }}></div>
     </div>
     </div>
     <div id="progress" ></div>
         
 </div>

    </div>
    )
}
export default RangeContainer