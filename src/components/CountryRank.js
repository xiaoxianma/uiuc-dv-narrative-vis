import React, {useEffect, useRef, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import {Bar, BarChart, Legend, Tooltip, XAxis, YAxis} from "recharts";
import {AnnotationLabel, AnnotationCalloutRect} from "react-annotation";
import * as d3 from "d3";


const useStyle = makeStyles(theme => ({
    plot: {
        leftMargin: theme.spacing(10)
    },
    description: {
        marginTop: theme.spacing(3),
        textAlign: "left",
        fontSize: 16,
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
                    <BarChart layout="horizontal" width={1200} height={600} data={data}
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
                        <svg width={1200} height={600}>
                            <AnnotationLabel
                                x={710}
                                y={230}
                                dy={-80}
                                dx={80}
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

                            <AnnotationCalloutRect
                                x={300}
                                y={263}
                                dy={-90}
                                dx={-90}
                                color={"white"}
                                note={{
                                    "label":"GDP, Social Support and Healthy life expectancy are the three biggest factors",
                                    "lineType":"horizontal",
                                    "padding": 10,
                                }}
                                subject={{"width":250,"height":200}}
                            />
                        </svg>
                    </BarChart>
                    <p className={classes.description}>From this chart, we can see three factor gdp, social support, and healthy life expectancy are way more important than the others. General speaking,
                    strong economy will make a country happy. But it is always true. For example, the economy of Costa Rica is out of top 50 in the world. However, it ranks the 12th happiest country.</p>
                </Grid>
                <Grid item xs={2}/>
            </Grid>

        </div>
    );
}