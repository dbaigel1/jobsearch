import React from 'react'
import * as d3 from 'd3'
import {legendColor} from 'd3-svg-legend'

const ColorLegend = ({width, height}) => {
    
    const colors = ["#A65353","#D97855","#BFB08B","#5390A6", "#0D261A","#F2EEB6","#41A6A6","#a6537b", "#FFB447", "#FF6961"]
    const names = ["LinkedIn", "Website", "Referral", "Tufts Portal", "1st Interview", "2nd Interview", "Final Round", "Offer", "No Response", "Rejected"]
    
    const ordinal = d3.scaleOrdinal()
      .domain(names)
      .range(colors)
    
    const svg = d3.select("svg")
    
    svg.append("g")
      .attr("class", "legendOrdinal")
      .attr("transform", "translate(10,10)")
      
    
    const legendOrdinal = legendColor()
      .orient("Horizontal")
      .shapeWidth(100)
      .shapePadding(20)
      .scale(ordinal)
      
    
    svg.select(".legendOrdinal")
      .call(legendOrdinal)
      
    
    return (
        <svg className="legend" viewBox = {`0 0 ${width} ${height}`}>

        </svg>
    )
}

export default ColorLegend