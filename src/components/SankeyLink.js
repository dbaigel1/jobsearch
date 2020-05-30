import React from 'react'
import {sankeyLinkHorizontal} from "d3-sankey"
import { Tooltip } from 'react-svg-tooltip';

const SankeyLink = ({link, color}) => {
    // const handleHover = () => {
    //     console.log(link.value)
    // }
    
    return (
        <>
            <path
                d={sankeyLinkHorizontal()(link)}
                style={
                    {
                        fill: 'none',
                        strokeOpacity: '0.7',
                        stroke: color,
                        strokeWidth: Math.max(7, link.width)
                    }
                }
            />

        </>

    )
}

export default SankeyLink