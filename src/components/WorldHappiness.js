import React, {useEffect, useRef, useState} from 'react';
import * as d3 from "d3";
import {csv} from "d3-fetch";
import {ComposableMap, Geographies, Geography, Graticule, Sphere, ZoomableGroup} from "react-simple-maps";
import {Colorscale} from "react-colorscales";
import {makeStyles} from "@material-ui/core/styles";
import dataset from "../data/2019.csv";
import ReactTooltip from "react-tooltip";
import Grid from "@material-ui/core/Grid";
import DataChart from "./DataChart";
import Button from "@material-ui/core/Button";
import {cyan} from "@material-ui/core/colors";

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
    },
    chart: {
        margin: theme.spacing(4)
    },
    btnGroup: {
        '& > *': {
            margin: theme.spacing(1),
        },
        textAlign: "left",
    },
    btn: {
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: cyan[100]
        },
        '&:active': {
            backgroundColor: cyan[300]
        }
    },
    activeBtn: {
        backgroundColor: cyan[300],
        '&:hover': {
            backgroundColor: cyan[100]
        },
        '&:active': {
            backgroundColor: cyan[300]
        },
        '&:focus': {
            backgroundColor: cyan[300]
        }
    }
}));
const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const colorRange = ['#d53e4f', '#f46d43', '#fdae61', '#abdda4', '#66c2a5', '#3288bd'];
const colorScale = d3.scaleLinear()
    .domain([2.6, 3.8, 4.8, 5.8, 6.8, 7.8])
    .range(colorRange);

export default function WorldHappiness() {
    const classes = useStyle();
    const [score, setScore] = useState("");
    const [attr, setAttr] = useState("");
    const [data, setData] = useState([]);
    const [tooltipContent, setTooltipContent] = useState("");
    const [gdpPerCapita, setGdpPerCapita] = useState([]);
    const [socialSupport, setSocialSupport] = useState([]);
    const [healthy, setHealthy] = useState([]);
    const [freedom, setFreedom] = useState([]);
    const [generosity, setGenerosity] = useState([]);
    const [perceptions, setPerceptions] = useState([]);
    const [charData, setChartData] = useState([]);
    const [lineData, setLineData] = useState([]);
    const [chartXAxis, setChartXAxis] = useState("gdp per capita");
    const [isGdpActive, setIsGdpActive] = useState(true);
    const [isSocialActive, setIsSocialActive] = useState(false);
    const [isHealthyActive, setIsHealthyActive] = useState(false);
    const [isFreedomActive, setIsFreedomActive] = useState(false);
    const [isGenerosityActive, setIsGenerosityActive] = useState(false);
    const [isPerceptionActive, setIsPerceptionActive] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");

    useEffect(() => {
        csv(dataset).then(rows => {
            const tmpGdp = [];
            const tmpSocial = [];
            const tmpHealthy = [];
            const tmpFreedom = [];
            const tmpGenerosity = [];
            const tmpPerceptions = [];
            setData(rows);
            const size = 5;
            const color = '#12939A';
            for (const row of rows) {
                tmpGdp.push({x: row['gdp-per-capita'] * 2 / 1.69, y: row['score'], country: row['country'], size, color});
                tmpSocial.push({x: row['social-support'] * 2 / 1.63, y: row['score'], country: row['country'], size, color});
                tmpHealthy.push({x: row['healthy-life-expectancy'] * 2 / 1.15, y: row['score'], country: row['country'], size, color});
                tmpFreedom.push({x: row['freedom'] * 2 / 0.61, y: row['score'], country: row['country'], size, color});
                tmpGenerosity.push({x: row['generosity'] * 2 / 0.6, y: row['score'], country: row['country'], size, color});
                tmpPerceptions.push({x: row['perceptions-of-corruption'] * 2 / 0.46, y: row['score'], country: row['country'], size, color});
            }
            setGdpPerCapita(tmpGdp);
            setSocialSupport(tmpSocial);
            setHealthy(tmpHealthy);
            setFreedom(tmpFreedom);
            setGenerosity(tmpGenerosity);
            setPerceptions(tmpPerceptions);
            // initial data
            setChartData(tmpGdp);
            setLineData([{x: 0.05, y: 3.5}, {x: 2, y: 6.6}])
        });
    }, []);

    useEffect(() => {
        const tmpData = [];
        for (const row of charData) {
            if (row['country'] === selectedCountry) {
                row.size = 10;
                row.color = '#ffb74d';
                setScore(`(${row.y})`);
                setAttr(`- ${row.x.toFixed(2)}`);
            } else {
                row.size = 5;
                row.color = '#12939A';
            }
            tmpData.push(row);
        }
        setChartData(tmpData);
    }, [selectedCountry]);

    const handleBtnClick = (event) => {
        const value = event.currentTarget.id;
        if (value === "gdp") {
            setIsGdpActive(true);
            setChartData(gdpPerCapita);
            setChartXAxis("gdp per capita");
            setLineData([{x: 0.05, y: 3.5}, {x: 2, y: 6.6}]);
        } else {
            setIsGdpActive(false);
        }
        if (value === "social") {
            setIsSocialActive(true);
            setChartData(socialSupport);
            setChartXAxis("social support");
            setLineData([{x: 0.05, y: 3.0}, {x: 2, y: 6.0}]);
        } else {
            setIsSocialActive(false);
        }
        if (value === "healthy") {
            setIsHealthyActive(true);
            setChartData(healthy);
            setChartXAxis("healthy");
            setLineData([{x: 0.05, y: 2.7}, {x: 2, y: 6.5}]);
        } else {
            setIsHealthyActive(false);
        }
        if (value === "freedom") {
            setIsFreedomActive(true);
            setChartData(freedom);
            setChartXAxis("freedom");
            setLineData([{x: 0.05, y: 3.3}, {x: 2, y: 6.0}]);
        } else {
            setIsFreedomActive(false);
        }
        if (value === "generosity") {
            setIsGenerosityActive(true);
            setChartData(generosity);
            setChartXAxis("generosity");
            setLineData([{x: 0.05, y: 4.5}, {x: 2, y: 6.5}]);
        } else {
            setIsGenerosityActive(false);
        }
        if (value === "perception") {
            setIsPerceptionActive(true);
            setChartData(perceptions);
            setChartXAxis("perception");
            setLineData([{x: 0.05, y: 4.5}, {x: 2, y: 7.0}]);
        } else {
            setIsPerceptionActive(false);
        }
    };

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
                                                            setTooltipContent(`${geo.properties.NAME} - score: ${d ? d["score"] : "N/A"}`)
                                                            setSelectedCountry(d ? d['country'] : "");
                                                        }}
                                                        onMouseLeave={() => {
                                                            setTooltipContent("");
                                                            setSelectedCountry("");
                                                            setAttr("");
                                                            setScore("");
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
                    <Grid item xs={6}>
                        <div className={classes.chart}>
                            <DataChart
                                attr={attr}
                                score={score}
                                setScore={setScore}
                                setAttr={setAttr}
                                lineData={lineData}
                                chartData={charData}
                                setChartData={setChartData}
                                chartXAxis={chartXAxis}
                                selectedCountry={selectedCountry}
                                setSelectedCountry={setSelectedCountry}
                            />
                        </div>
                        <div className={classes.btnGroup}>
                            <Button variant="contained" className={isGdpActive ? classes.activeBtn : classes.btn} onClick={handleBtnClick} id="gdp">GDP Per Capita</Button>
                            <Button variant="contained" className={isSocialActive ? classes.activeBtn : classes.btn} onClick={handleBtnClick} id="social">Social Support</Button>
                            <Button variant="contained" className={isHealthyActive ? classes.activeBtn : classes.btn} onClick={handleBtnClick} id="healthy">Healthy</Button>
                            <Button variant="contained" className={isFreedomActive ? classes.activeBtn : classes.btn} onClick={handleBtnClick} id="freedom">Freedom</Button>
                            <Button variant="contained" className={isGenerosityActive ? classes.activeBtn : classes.btn} onClick={handleBtnClick} id="generosity">Generosity</Button>
                            <Button variant="contained" className={isPerceptionActive ? classes.activeBtn : classes.btn} onClick={handleBtnClick} id="perception">Perceptions</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}