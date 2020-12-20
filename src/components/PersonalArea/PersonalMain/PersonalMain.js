import React from 'react'
import PersonalNav from '../PersonalNav/PersonalNav'
import PersonalHeader from '../PersonalHEader/PersonalHeader'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import PersonalRating from '../PersonalRating/PersonalRating'
import PersonalCalendar from '../PersonalCalendar/PersonalCalendar'


function PersonalMain(){


    return(
        <div>
        <PersonalNav/>
        <PersonalHeader/>
        <PersonalInfo/>
        <PersonalRating/>
        <PersonalCalendar/>
       
        </div>
       
    )
}

export default PersonalMain