import React, {useEffect, useRef, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import {Bar, BarChart, Legend, Tooltip, XAxis, YAxis} from "recharts";
import {AnnotationLabel} from "react-annotation";
import * as d3 from "d3";


const useStyle = makeStyles(theme => ({
    plot: {
        leftMargin: theme.spacing(10)
    }
}));

export default function CountryRank(props) {
    const classes = useStyle();
    const ref = useRef();
    const [data, setData] = useState([]);

    useEffect(() => {
        const tmpData = [];
        for (const row of props.reportData.slice(0, 20)) {
            tmpData.push({
                name: row['country'],
                gdp: parseFloat(row['gdp-per-capita']),
                social: row['social-support'],
                health: row['healthy-life-expectancy'],
                freedom: row['freedom'],
                generosity: row['generosity'],
                perceptions: row['perceptions-of-corruption']
            });
        }
        setData(tmpData);
    }, [props.reportData]);

    useEffect(() => {
        const svgElement = d3.select(ref.current);
        svgElement.append("circle")
            .attr("cx", 150)
            .attr("cy", 70)
            .attr("r", 50)
    }, [])

    const legendFormatter = (value, entry) => {
        const {color} = entry;
        return <span style={{color}}>{value}</span>
    };

    return (
        <div className="section">
            <Grid container>
                <Grid item xs={2}/>
                <Grid item xs={8}>
                    <h4>Top 20 Happiest Countries</h4>
                    <BarChart layout="horizontal" width={1600} height={800} data={data}
                              margin={{top: 20, right: 30, left: 20, bottom: 100}}>
                        <XAxis dataKey="name" type="category" interval={0} angle={-30}
                               tick={{fill: 'white', fontSize: 16, dy: 35, dx: -10}}/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend verticalAlign="top" formatter={legendFormatter}/>
                        <Bar dataKey="gdp" stackId="a" fill="#8884d8" animationBegin={100} animationDuration={2000}/>
                        <Bar dataKey="social" stackId="a" fill="#f06292" animationBegin={100} animationDuration={2000}/>
                        <Bar dataKey="health" stackId="a" fill="#ba68c8" animationBegin={100} animationDuration={2000}/>
                        <Bar dataKey="freedom" stackId="a" fill="#4dd0e1" animationBegin={100}
                             animationDuration={2000}/>
                        <Bar dataKey="generosity" stackId="a" fill="#ffd54f" animationBegin={100}
                             animationDuration={2000}/>
                        <Bar dataKey="perceptions" stackId="a" fill="#81c784" animationBegin={100}
                             animationDuration={2000}/>
                        <svg width={1600} height={800}>
                            <AnnotationLabel
                                x={938}
                                y={320}
                                dy={-100}
                                dx={100}
                                color={"#ff8a65"}
                                note={{
                                    "label": "Costa Rica tops the happiness index despite low gdp",
                                    "align": "left",
                                    "orientation": "topBottom",
                                    "bgPadding": 10,
                                    "padding": 15,
                                    "titleColor": "#ffe0b2"
                                }}
                            />
                        </svg>
                    </BarChart>
                </Grid>
                <Grid item xs={2}/>
            </Grid>

        </div>
    );
}