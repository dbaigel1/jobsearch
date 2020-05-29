import React from 'react'

const KPI = (props) => {
    return (
        <div className="KPI">
            <p>{props.title}</p>
            <p id="kpiVal">{props.data}</p>
        </div>
    )
}

export default KPI