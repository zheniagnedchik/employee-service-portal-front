import React from 'react'
import './ButtonContainerFooter.css'
import classnames from 'classnames'


const ButtonContainerFooter=(props)=>{
    if(props.ButtonCriteria){
        return(
            null
        )
    }
    return(
        <div className="footerBtnContain">
                <input type="button" value="Подтвердить" className="submit" onClick={props.Next}/>
                <input type="button" value="Вернуться на главную" className="back"/>
            </div>
    )
}
export default ButtonContainerFooter