import React from 'react'

const Writeup = ({title, body}) => {
    return (
        <div className= "writeup">
            <h1 id="writeupTitle">
                {title}
            </h1>
            
            {body}

        </div>
    )
}

export default Writeup