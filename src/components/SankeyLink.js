import React, {useState} from 'react'
import {sankeyLinkHorizontal} from "d3-sankey"


const SankeyLink = (props) => {
    const [op, setOp] = useState('0.6')
    const style = {
        fill: 'none',
        strokeOpacity: op,
        stroke: props.color,
        strokeWidth: Math.max(2, props.link.width)
    }

    const handleHover = () => {
        setOp("1")
    }

    const handleLeave = () => {
        setOp("0.6")
    }

    return (
        <>
            <path
                d={sankeyLinkHorizontal()(props.link)}
                style={
                    style
                }
                onMouseOver={handleHover}
                onMouseLeave={handleLeave}
            >
                <title>{props.link.source.name + " -> " + props.link.target.name + ": " + props.link.value}</title>
            </path>

        </>

    )
}

export default SankeyLink