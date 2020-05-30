import React from 'react'
import {sankeyLinkHorizontal} from "d3-sankey"
import { Tooltip } from 'react-svg-tooltip';

const SankeyLink = (props) => {

    return (
        <>
            <path
                d={sankeyLinkHorizontal()(props.link)}
                style={
                    {
                        fill: 'none',
                        strokeOpacity: '0.7',
                        stroke: props.color,
                        strokeWidth: Math.max(2, props.link.width)
                    }
                }
            >
                <title>{props.link.source.name + " -> " + props.link.target.name + ": " + props.link.value}</title>
            </path>

        </>

    )
}

export default SankeyLink