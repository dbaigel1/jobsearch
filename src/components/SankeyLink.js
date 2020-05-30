import React from 'react'
import {sankeyLinkHorizontal} from "d3-sankey"

const SankeyLink = ({link, color}) => {
    return (
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
    )
}

export default SankeyLink