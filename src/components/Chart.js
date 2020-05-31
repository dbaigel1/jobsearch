import React from 'react'
import * as d3 from 'd3'
import { sankey} from "d3-sankey"
import SankeyNode from './SankeyNode'
import SankeyLink from './SankeyLink'

const Chart = ({data,width,height}) => {
    
    const {nodes, links} = sankey().nodeWidth(30)
                                   .nodePadding(100)
                                   .extent([[1,1], [width-1,height-5],])
                                   (data)

    const colors = ["#A65353","#D97855","#BFB08B","#5390A6", "#0D261A","#F2EEB6","#41A6A6","#a6537b", "#FFB447", "#FF6961"]
    

    const newColorScale = d3.scaleOrdinal()
                            .domain(nodes.length)
                            .range(colors)

    return (
        /* return nodes and links */
        <div className="chart">
            <svg viewBox = {`0 0 ${width} ${height}`}>
                <g style={{ mixBlendMode: 'multiply' }}>
                    {nodes.map((node, i) => (
                        <SankeyNode 
                            {...node} 
                            color={newColorScale(i)}
                            key={node.name}
                        />
                    ))}
                    {links.map((link, i) => (
                        <SankeyLink 
                            link = {link}
                            color= {newColorScale(link.source.index)}
                            key= {i}
                        />
                    ))}
                </g>

            </svg>
        </div>
    )
}

export default Chart