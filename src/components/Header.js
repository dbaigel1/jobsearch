import React from 'react'
import moment from 'moment'

const Header = () => {
    const currentDate = moment().format('MM/DD/YYYY')
    console.log(currentDate)
    //can be: Applying, Interviewing, Accepted, Shelved
    const status = "Applying" 
    return (
        <div className="headerContainer">
            <h3 id="jobStatus">Job Status: <span id={`jobStatus${status}`}>{status}</span></h3>
            <h3>Daniel's Coronavirus Job Search</h3>
            <h3 id="date">Last Updated: {currentDate}</h3>
        </div>
    )
}


export default Header