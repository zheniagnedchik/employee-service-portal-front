import React from 'react'
import './BattonContainerTop.css'
import classnames from 'classnames'


const ButtonConditions=(props)=>{
    if(!props.ButtonConditions){
        return(
            null
        )
    }
    return(
        <div className="btn_container_1">
        
               <button
               className={classnames("btn_criteria_1",{"btn_active_criteria":props.btn_active_conditions_1})}
               onClick={props.Btn_active_criteria_1}>Комфортность условий труда</button>
        <button 
                className={classnames("btn_criteria_2",{"btn_active_criteria":props.btn_active_conditions_2})}
                onClick={props.Btn_active_criteria_2}
                > Тяжесть выполняемой работы</button>
          <button 
                
                className={classnames("btn_criteria_3",{"btn_active_criteria":props.btn_active_conditions_3})}
                onClick={props.Btn_active_criteria_3}
                >Оборудованное рабочее место
                со всеми необходимыми материалами</button>
         
        </div>
    )
}
export default ButtonConditions