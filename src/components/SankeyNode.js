import React, {useRef} from "react"


const SankeyNode = ({name, x0, x1, y0, y1, color, value}) => {

    return (
        <>
        <rect x={x0} y={y0} width={x1 - x0} height={(y1 - y0) + 10} fill={color}>
          <title>{name} : {value}</title>
        </rect>
        </>
    )
}

export default SankeyNode