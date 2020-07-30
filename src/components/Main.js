import React, {useEffect, useState} from 'react';
import Introduction from "./Introduction";
import CountryRank from "./CountryRank";
import WorldHappiness from "./WorldHappiness";
import Resources from "./Resources";
import {csv} from "d3-fetch";
import dataset from "../data/2019.csv";
import regionDataSet from "../data/2019_region.csv";
import Title from "./Title";
import Region from "./Region";

export default function Main() {
    const [reportData, setReportData] = useState([]);
    const [reportRegionData, setReportRegionData] = useState([]);

    useEffect(() => {
        csv(dataset).then(rows => setReportData(rows));
        csv(regionDataSet).then(rows => {
            const tmpData = new Map();
            for (const row of rows) {
                if (tmpData.hasOwnProperty(row['Region'])) {
                    tmpData.get(row['Region']).push(parseFloat(row['Happiness Score']));
                } else {
                    tmpData.set(row['Region'], [parseFloat(row['Happiness Score'])]);
                }
            }
            const tmpRegionData = [];
            for (const [key, scores] of tmpData.entries()) {
                tmpRegionData.push({name: key, score: scores.reduce((sum, x) => sum + x)});
            }
            tmpRegionData.sort((a, b) => b.score - a.score);
            setReportRegionData(tmpRegionData);
        })
    }, []);

    console.log(reportData);
    return (
        <div>
            <Title/>
            <Introduction/>
            <WorldHappiness reportData={reportData}/>
            <Region data={reportRegionData}/>
            <CountryRank reportData={reportData}/>
            <Resources/>
        </div>
    );
}