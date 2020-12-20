import React,{Component} from 'react'
import './Range.css'


import RangeTitle from './RangeTitle/RangeTitle'
import BattonContainerTop from './ButtonContainerTop/BattonContainerTop'
import RangeContainer from './RangeContainer/RangeContainer'
import ButtonContainerFooter from './ButtonContainerFooter/ButtonContainerFooter'
import BattonCriteria from './ButtonContainerTop/BattonCriteria'
import ButtonConditions from './ButtonContainerTop/ButtonConditions'
import ButtonContainerSub from './ButtonContainerFooter/ButtonContainerSub'
export default class Range extends Component{
    constructor(props){
        
        super(props);
        this.state={
            value : 0,
            btn_manage:true,
            btn_condition:false,
            roles:[{
                id: 1,
                role:"Начальник"
            },
            {
                id:2,
                role:"Работник"
            }
            
        ],
        active_1:false,
        active_2:false,
        active_3:false,
        active_4:false,
        active_5:false,
        test:0,
        ButtonTop:true,
        ButtonCriteria:false,
        ButtonConditions:false,
        btn_active_criteria_1:true,
        btn_active_criteria_2:false,
        btn_active_criteria_3:false,
        btn_active_conditions_1:true,
        btn_active_conditions_2:false,
        btn_active_conditions_3:false,
        step_criteria:1,
        info:[]
    
        
    
        }
       
    }
  

    handleChange = (e)=>{
        let selector = document.getElementById('selector')
        let progress = document.getElementById('progress')
        let value_itog = this.state.value/20
        
        this.setState({value: e.target.value})
        selector.style.left=this.state.value +'%'
        progress.style.width=this.state.value +'%'
        if(value_itog>0.1){this.setState({active_1:true})}
        if(value_itog<0.1){this.setState({active_1:false })}
        
        if(value_itog>1.2){this.setState({active_2:true})}
        if(value_itog<1.2){this.setState({ active_2:false})}
        
        if(value_itog>2.5){this.setState({active_3:true})}
        if(value_itog<2.5){this.setState({active_3:false})}

        if(value_itog>3.5){this.setState({active_4:true})}
        if(value_itog<3.5){this.setState({active_4:false})}

        if(value_itog>4.5){this.setState({active_5:true})}
        if(value_itog<4.5){this.setState({active_5:false})}

        if(value_itog>0.1&&value_itog<1){this.setState({test:1})}
        if(value_itog>1.2&&value_itog<2){this.setState({test:2})}
        if(value_itog>2.5&&value_itog<3){this.setState({test:3})}
        if(value_itog>3.5&&value_itog<4){this.setState({test:4})}
        if(value_itog>4.5&&value_itog<5){this.setState({test:5})}
        console.log(this.state.test)
}
Btn_manage=()=>{
    
    this.setState({
        btn_manage:true,
btn_condition:false,

    })
    if(this.state.ButtonConditions===true){
        this.setState({
            ButtonConditions:false,
            ButtonCriteria:true
        })
    }
}
Btn_condition=()=>{
    this.setState({
        btn_manage:false,
btn_condition:true,

    })
    if(this.state.ButtonCriteria===true){
        this.setState({
            ButtonConditions:true,
            ButtonCriteria:false
        })
    }
}
Btn_active_criteria_1=()=>{
    this.setState({
        btn_active_criteria_1:true,
        btn_active_criteria_2:false,
        btn_active_criteria_3:false,
        btn_active_conditions_1:true,
        btn_active_conditions_2:false,
        btn_active_conditions_3:false
    })
}
Btn_active_criteria_2=()=>{
    this.setState({
        btn_active_criteria_1:false,
        btn_active_criteria_2:true,
        btn_active_criteria_3:false,
        btn_active_conditions_1:false,
        btn_active_conditions_2:true,
        btn_active_conditions_3:false
    })
}
Btn_active_criteria_3=()=>{
    this.setState({
        btn_active_criteria_1:false,
        btn_active_criteria_2: false,
        btn_active_criteria_3:true,
        btn_active_conditions_1:false,
        btn_active_conditions_2:false,
        btn_active_conditions_3:true
    })
}
Next=()=>{
  
    if(this.state.btn_manage===true){
        this.setState({
            ButtonTop:false,
            ButtonCriteria:true,
        })
    }
    if(this.state.btn_condition===true){
        this.setState({
            ButtonTop:false,
            ButtonConditions:true
        })
    }
    
    
   
   
}
NextTestCriteria=()=>{
    this.setState({step_criteria:this.state.step_criteria+1,
                   
    })
    console.log(this.state.info)
    if(this.state.btn_active_criteria_1===true){
        this.setState({
            btn_active_criteria_1:false,
            btn_active_criteria_2:true,
            btn_active_criteria_3:false
        })
    }
    if(this.state.btn_active_criteria_2){
        this.setState({
            btn_active_criteria_2:false,
            btn_active_criteria_1:false,
            btn_active_criteria_3:true
        })
    }
    if(this.state.btn_active_criteria_3){
        this.setState({
            btn_active_criteria_1:false,
            btn_active_criteria_2:false
        })
    }
    if(this.state.step_criteria===3){
        this.setState({ButtonConditions:true,ButtonCriteria:false})
    }
    
    this.state.info.push(this.state.step_criteria)
    console.log("info",this.state.info)
    
}

      
    render(){
      
        let role= this.state.roles.map((roles,i)=>(
        
        <option key={i}>{roles.role}</option>
        ))
          

   
        

        return(
            <div>
                <RangeTitle/>
                <div>
                <BattonContainerTop
                Btn_manage={this.Btn_manage}
                Btn_condition={this.Btn_condition}
                btn_manage={this.state.btn_manage}
                btn_condition={this.state.btn_condition}
                ButtonTop={this.state.ButtonTop}/>
                <BattonCriteria
                btn_active_criteria_1={this.state.btn_active_criteria_1}
                btn_active_criteria_2={this.state.btn_active_criteria_2}
                btn_active_criteria_3={this.state.btn_active_criteria_3}
                Btn_active_criteria_1={this.Btn_active_criteria_1}
                Btn_active_criteria_2={this.Btn_active_criteria_2}
                Btn_active_criteria_3={this.Btn_active_criteria_3}
                ButtonCriteria={this.state.ButtonCriteria}/>
                <ButtonConditions
                ButtonConditions={this.state.ButtonConditions}
                btn_active_conditions_1={this.state.btn_active_conditions_1}
                btn_active_conditions_2={this.state.btn_active_conditions_2}
                btn_active_conditions_3={this.state.btn_active_conditions_3}
                Btn_active_criteria_1={this.Btn_active_criteria_1}
                Btn_active_criteria_2={this.Btn_active_criteria_2}
                Btn_active_criteria_3={this.Btn_active_criteria_3}
               />
                </div>
               
                <RangeContainer
                active_1={this.state.active_1}
                active_2={this.state.active_2}
                active_3={this.state.active_3}
                active_4={this.state.active_4}
                active_5={this.state.active_5}
                role={role}
                value={this.state.value}
                handleChange={this.handleChange}
                />
                <div>
                <ButtonContainerFooter
                Next={this.Next}
                ButtonCriteria={this.state.ButtonCriteria}/>
                <ButtonContainerSub
                ButtonCriteria={this.state.ButtonCriteria}
                NextTestCriteria={this.NextTestCriteria}
                />
                </div>
                


            
                    
            </div>

        
        )
    }
    
}