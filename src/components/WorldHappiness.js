import React, {useEffect, useRef, useState} from 'react';
import * as d3 from "d3";
import {csv} from "d3-fetch";
import {ComposableMap, Geographies, Geography, Graticule, Sphere, ZoomableGroup} from "react-simple-maps";
import {Colorscale} from "react-colorscales";
import {makeStyles} from "@material-ui/core/styles";
import dataset from "../data/2019.csv";
import ReactTooltip from "react-tooltip";
import Grid from "@material-ui/core/Grid";

const useStyle = makeStyles(theme => ({
    title: {
        marginTop: theme.spacing(8),
        fontSize: 48,
        color: "white"
    },
    colorScale: {
        maxWidth: "30%",
        margin: "auto"
    },
    root: {
        flexGrow: 1
    }
}));
const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const colorRange = ['#d53e4f', '#f46d43', '#fdae61', '#abdda4', '#66c2a5', '#3288bd'];
const colorScale = d3.scaleLinear()
    .domain([2.6, 3.8, 4.8, 5.8, 6.8, 7.8])
    .range(colorRange);

export default function WorldHappiness() {
    const classes = useStyle();
    const ref = useRef();
    const [data, setData] = useState([]);
    const [tooltipContent, setTooltipContent] = useState("");

    useEffect(() => {
        csv(dataset).then(rows => {
            setData(rows);
        });
    }, []);

    return (
        <div className="section">
            <div className={classes.root}>
                <div className={classes.title}>World Happiness</div>
                <Grid container>
                    <Grid item xs={6}>
                        <ComposableMap
                            data-tip=""
                            projectionConfig={{
                                rotate: [-10, 0, 0],
                                scale: 120
                            }}
                        >
                            <ZoomableGroup>
                                <Sphere stroke="#E4E5E6" strokeWidth={0.2}/>
                                <Graticule stroke="#E4E5E6" strokeWidth={0.2}/>
                                {data.length === 156 && (
                                    <Geographies geography={geoUrl}>
                                        {({geographies}) =>
                                            geographies.map(geo => {
                                                const d = data.find(s => s.country === geo.properties.NAME);
                                                return (
                                                    <Geography
                                                        key={geo.rsmKey}
                                                        geography={geo}
                                                        fill={d ? colorScale(d["score"]) : "white"}
                                                        onMouseEnter={() => {
                                                            console.log(geo.properties.NAME);
                                                            setTooltipContent(`${geo.properties.NAME} - score: ${d ? d["score"] : "N/A"}`)
                                                        }}
                                                        onMouseLeave={() => {
                                                            setTooltipContent("");
                                                        }}
                                                        style={{
                                                            default: {
                                                                outline: "none"
                                                            },
                                                            hover: {
                                                                fill: d ? colorScale(d["score"] - 0.2) : "white",
                                                                outline: "none"
                                                            },
                                                            pressed: {
                                                                fill: d ? colorScale(d["score"] - 0.2) : "white",
                                                                outline: "none"
                                                            }
                                                        }}
                                                    />
                                                );
                                            })
                                        }
                                    </Geographies>
                                )}
                            </ZoomableGroup>
                        </ComposableMap>
                        <div className={classes.colorScale}>
                            <p>{"Low <- Happiness Index -> High"}</p>
                            <Colorscale colorscale={colorRange}/>
                        </div>
                        <ReactTooltip>{tooltipContent}</ReactTooltip>
                    </Grid>
                    {/*<Grid item xs={3}>*/}
                    {/*</Grid>*/}
                </Grid>
            </div>
        </div>
    );
}