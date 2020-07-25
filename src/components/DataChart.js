import React, {useState} from "react";
import {ChartLabel, Hint, HorizontalGridLines, MarkSeries, VerticalGridLines, XAxis, XYPlot, YAxis} from "react-vis";
import {makeStyles} from "@material-ui/core/styles";


const useStyle = makeStyles(theme => ({
    chartLabel: {
        stroke: "white",
        fill: 'white',
        fontWeight: 400,
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
    const [hoverData, setHoverData] = useState(null);

    const handleMounseEnter = (event) => {
        setHoverData({x: event.x, score: event.y});
    };

    console.log(props.chartData)
    return (
        <XYPlot width={800} height={800} yDomain={[0, 8]} xDomain={[0, 2]} onMouseLeave={() => setHoverData(null)}>
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
            <ChartLabel text={props.chartXAxis} xPercent={0.85} yPercent={0.875} className={classes.chartLabel}/>
            <ChartLabel text="Happiness Score" xPercent={0.09} yPercent={0.1} className={classes.chartLabel} style={{transform: 'rotate(-90)'}}/>
            <MarkSeries data={props.chartData} sizeType="literal" onValueMouseOver={handleMounseEnter}/>
            {/*{hoverData && <Hint value={hoverData} align={{horizontal: 'left', vertical: 'bottom'}} className={classes.hint}/>}*/}
        </XYPlot>
    )
}