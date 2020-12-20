import React from 'react'
import './ButtonContainerFooter.css'
import classnames from 'classnames'


const ButtonContainerSub=(props)=>{
    if(!props.ButtonCriteria){
        return(
            null
        )
    }
    return(
        <div className="footerBtnContain">
                <input type="button" value="Отправить" className="submit" onClick={props.NextTestCriteria}/>
                <input type="button" value="Вернуться на главную" className="back"/>
            </div>
    )
}
export default ButtonContainerSub