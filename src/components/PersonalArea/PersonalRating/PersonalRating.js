import React ,{useState,useEffect} from 'react'
import './PersonalRating.css'


function PersonalRating(){
    const [articled,setPostId]=useState()
    
    function Post(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };
        fetch('https://cors-anywhere.herokuapp.com/https://portal-employee-service.herokuapp.com/test', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));
    }

    
    
    return(
        <div className="PersonalRating">
             <button onClick={Post}>Отпавить запрос</button>
        </div>
    )
}


export default PersonalRating