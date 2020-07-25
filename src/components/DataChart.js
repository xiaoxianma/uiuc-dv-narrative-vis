import React from "react";
import {HorizontalGridLines, MarkSeries, VerticalGridLines, XAxis, XYPlot, YAxis} from "react-vis";


export default function DataChart(props) {
    return (
        <XYPlot width={800} height={800}>
            <VerticalGridLines/>
            <HorizontalGridLines/>
            <XAxis title="gdp per capita" style={{
                line: {stroke: 'white'},
                ticks: {stroke: 'white'},
                text: {stroke: 'none', fill: 'white', fontWeight: 400},
                title: {stroke: 'white', fill: 'white', fontWeight: 600},
            }}/>
            <YAxis title="happiness score" style={{
                line: {stroke: 'white'},
                ticks: {stroke: 'white'},
                text: {stroke: 'none', fill: 'white', fontWeight: 400},
                title: {stroke: 'white', fill: 'white', fontWeight: 600},
            }}/>
            <MarkSeries data={props.data}/>
        </XYPlot>
    )
}