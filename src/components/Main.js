import React, {useEffect, useState} from 'react';
import Introduction from "./Introduction";
import CountryRank from "./CountryRank";
import WorldHappiness from "./WorldHappiness";
import Resources from "./Resources";
import {csv} from "d3-fetch";
import dataset from "../data/2019.csv";
import Title from "./Title";

export default function Main() {
    const [reportData, setReportData] = useState([]);

    useEffect(() => {
        csv(dataset).then(rows => setReportData(rows));
    }, []);

    console.log(reportData);
    return (
        <div>
            <Title/>
            <Introduction/>
            <CountryRank reportData={reportData}/>
            <WorldHappiness reportData={reportData}/>
            <Resources/>
        </div>
    );
}