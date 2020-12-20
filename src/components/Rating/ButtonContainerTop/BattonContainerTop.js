import React from 'react'
import './BattonContainerTop.css'
import classnames from 'classnames'


const BattonContainerTop=(props)=>{
    if(!props.ButtonTop){
        return(
            null
        )
    }
    return(
        <div className="btn_container_1">
                <input type="button"
                       value="Оценка качества управления"
                       className={classnames("btn_manage",{"btn_active":props.btn_manage})}
                       onClick={props.Btn_manage}/>
                <input type="button"
                        value="Оценка условий труда"
                        className={classnames("btn_condition",{"btn_active":props.btn_condition})}
                        onClick={props.Btn_condition}
                        />
                </div>
    )
}
export default BattonContainerTop