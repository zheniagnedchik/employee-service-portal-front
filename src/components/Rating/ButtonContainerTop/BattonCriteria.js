import React from 'react'
import './BattonContainerTop.css'
import classnames from 'classnames'


const BattonCriteria=(props)=>{
    if(!props.ButtonCriteria){
        return(
            null
        )
    }
    return(
        <div className="btn_container_1">
        <input type="button"
               value="Компетентность"
               className={classnames("btn_criteria_1",{"btn_active_criteria":props.btn_active_criteria_1})}
               onClick={props.Btn_active_criteria_1}/>
        <input type="button"
                value="Самоорганизованность"
                className={classnames("btn_criteria_2",{"btn_active_criteria":props.btn_active_criteria_2})}
                onClick={props.Btn_active_criteria_2}
                />
          <input type="button"
                value="Объективность"
                className={classnames("btn_criteria_3",{"btn_active_criteria":props.btn_active_criteria_3})}
                onClick={props.Btn_active_criteria_3}
                />
        </div>
    )
}
export default BattonCriteria