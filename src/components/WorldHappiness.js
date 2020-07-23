import React, {useEffect, useRef, useState} from 'react';
import * as d3 from "d3";
import {csv} from "d3-fetch";
import {scaleSequential} from "d3-scale";
import {ComposableMap, Geographies, Geography, Graticule, Sphere} from "react-simple-maps";
import {makeStyles} from "@material-ui/core/styles";
import dataset from "../data/2019.csv";

const useStyle = makeStyles(theme => ({}));
const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = d3.scaleLinear()
    .domain([2.8, 3.8, 4.8, 5.8, 6.8, 7.8])
    .range(['#d53e4f', '#f46d43', '#fdae61', '#abdda4', '#66c2a5', '#3288bd']);

export default function WorldHappiness() {
    const classes = useStyle();
    const ref = useRef();
    const [data, setData] = useState([]);

    useEffect(() => {
        csv(dataset).then(rows => {
            setData(rows);
        });
    }, []);

    return (
        <div className="section">
            <ComposableMap
                projectionConfig={{
                    rotate: [-10, 0, 0],
                    scale: 120
                }}
            >
                <Sphere stroke="#E4E5E6" strokeWidth={0.2}/>
                <Graticule stroke="#E4E5E6" strokeWidth={0.2}/>
                {data.length === 156 && (
                    <Geographies geography={geoUrl}>
                        {({geographies}) =>
                            geographies.map(geo => {
                                const d = data.find(s=> s.country === geo.properties.NAME);
                                if (!d) {
                                    debugger;
                                }
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={d ? colorScale(d["score"]) : "white"}
                                        // fill={colorScale(parseFloat(data["score"]))}
                                    />
                                );
                            })
                        }
                    </Geographies>
                )}
            </ComposableMap>
        </div>
    );
}