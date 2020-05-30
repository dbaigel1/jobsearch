import React from 'react'

const Writeup = (props) => {
    return (
        <div className= "writeup">
            <h1 id="writeupTitle">
                {props.title}
            </h1>
            <p id="writeupBody">
               {props.body} 
            </p>

        </div>
    )
}

export default Writeup