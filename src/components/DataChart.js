import React, {useState} from "react";
import {ChartLabel, Hint, HorizontalGridLines, MarkSeries, VerticalGridLines, XAxis, XYPlot, YAxis} from "react-vis";
import {makeStyles} from "@material-ui/core/styles";


const useStyle = makeStyles(theme => ({
    chartLabel: {
        stroke: "white",
        fill: 'white',
        fontWeight: 400,
    },
    countryLabel: {
        fontSize: 30,
        stroke: "#eeeeee",
        fill: '#eeeeee'
    },
    hint: {
        fontSize: 14,
        value: {
            color: "white"
        },
        backgroundColor: "grey"
    }
}));

export default function DataChart(props) {
    const classes = useStyle();

    const handleMounseEnter = (event) => {
        props.setSelectedCountry(event.country);
        const tmpData = [];
        for (const row of props.chartData) {
            if (row['country'] === event.country) {
                row.size = 10;
                row.color = '#ffb74d';
            } else {
                row.size = 5;
                row.color = '#12939A';
            }
            tmpData.push(row);
        }
        props.setChartData(tmpData);
        props.setScore(`(${event.y})`);
        props.setAttr(`- ${event.x.toFixed(2)}`);
    };

    const handleMouseOut = (event) => {
        props.setSelectedCountry("");
        const tmpData = [];
        for (const row of props.chartData) {
            row.size = 5;
            row.color = '#12939A';
            tmpData.push(row);
        }
        props.setChartData(tmpData);
        props.setScore("");
        props.setAttr("");
    };

    console.log(props.selectedCountry);
    return (
        <XYPlot width={800} height={800} yDomain={[0, 8]} xDomain={[0, 2]}>
            <VerticalGridLines/>
            <HorizontalGridLines/>
            <XAxis style={{
                line: {stroke: 'white'},
                ticks: {stroke: 'white'},
                text: {stroke: 'none', fill: 'white', fontWeight: 400},
            }}/>
            <YAxis style={{
                line: {stroke: 'white'},
                ticks: {stroke: 'white'},
                text: {stroke: 'none', fill: 'white', fontWeight: 400},
            }}/>
            <ChartLabel text={`${props.chartXAxis} ${props.attr}`} xPercent={0.8} yPercent={0.875} className={classes.chartLabel}/>
            <ChartLabel text="Happiness Score" xPercent={0.07} className={classes.chartLabel} />
            <ChartLabel text={props.score} xPercent={0.1} yPercent={0.03} className={classes.chartLabel} />
            <ChartLabel text={props.selectedCountry} xPercent={0.1} yPercent={0.85} className={classes.countryLabel}/>
            <MarkSeries data={props.chartData} sizeType="literal" colorType="literal" onValueMouseOver={handleMounseEnter} onValueMouseOut={handleMouseOut}/>
        </XYPlot>
    )
}