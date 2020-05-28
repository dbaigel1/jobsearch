import React from 'react'

const Writeup = (props) => {
    return (
        <div className= "writeup">
            <h1>
                {props.title}
            </h1>
            <p>
               {props.body} 
            </p>

        </div>
    )
}

export default Writeup