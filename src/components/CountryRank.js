import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import {Hint, HorizontalBarSeries, HorizontalGridLines, VerticalGridLines, XAxis, XYPlot, YAxis} from "react-vis";


const rankMapping = {
    1: 'Finland',
    2: 'Denmark',
    3: 'Norway',
    4: 'Iceland',
    5: 'Netherlands',
    6: 'Switzerland',
    7: 'Sweden',
    8: 'New Zealand',
    9: 'Canada',
    10: 'Austria',
    11: 'Australia',
    12: 'Costa Rica',
    13: 'Israel',
    14: 'Luxembourg',
    15: 'United Kingdom',
    16: 'Ireland',
    17: 'Germany',
    18: 'Belgium',
    19: 'United States of America',
    20: 'Czechia',
    21: 'United Arab Emirates',
    22: 'Malta',
    23: 'Mexico',
    24: 'France',
    25: 'Taiwan',
    26: 'Chile',
    27: 'Guatemala',
    28: 'Saudi Arabia',
    29: 'Qatar',
    30: 'Spain',
}

const useStyle = makeStyles(theme => ({
    plot: {
        leftMargin: theme.spacing(10)
    }
}));

export default function CountryRank(props) {
    const classes = useStyle();
    const [gdpPerCapita, setGdpPerCapita] = useState([]);
    const [socialSupport, setSocialSupport] = useState([]);
    const [healthy, setHealthy] = useState([]);
    const [freedom, setFreedom] = useState([]);
    const [generosity, setGenerosity] = useState([]);
    const [perceptions, setPerceptions] = useState([]);

    useEffect(() => {
        const tmpGdp = [];
        const tmpSocial = [];
        const tmpHealthy = [];
        const tmpFreedom = [];
        const tmpGenerosity = [];
        const tmpPerceptions = [];
        for (const row of props.reportData.slice(0, 30)) {
            tmpGdp.push({x: parseFloat(row['gdp-per-capita']), y: parseInt(row['rank']), country: row['country']});
            tmpSocial.push({x: parseFloat(row['social-support']), y: parseInt(row['rank']), country: row['country']});
            tmpHealthy.push({x: parseFloat(row['healthy-life-expectancy']), y: parseInt(row['rank']), country: row['country']});
            tmpFreedom.push({x: parseFloat(row['freedom']), y: parseInt(row['rank']), country: row['country']});
            tmpGenerosity.push({x: parseFloat(row['generosity']), y: parseInt(row['rank']), country: row['country']});
            tmpPerceptions.push({x: parseFloat(row['perceptions-of-corruption']), y: parseInt(row['rank']), country: row['country']});
        }
        setGdpPerCapita(tmpGdp);
        setSocialSupport(tmpSocial);
        setHealthy(tmpHealthy);
        setFreedom(tmpFreedom);
        setGenerosity(tmpGenerosity);
        setPerceptions(tmpPerceptions);
    }, [props.reportData]);

    return (
        <div className="section">
            <Grid container>
                <Grid item xs={4}/>
                <Grid item xs={4}>
                    <XYPlot width={1000} height={800} stackBy="x" className={classes.plot}>
                        <VerticalGridLines/>
                        <HorizontalGridLines/>
                        <HorizontalBarSeries data={gdpPerCapita}/>
                        <HorizontalBarSeries data={socialSupport}/>
                        <HorizontalBarSeries data={healthy}/>
                        <HorizontalBarSeries data={freedom}/>
                        <HorizontalBarSeries data={generosity}/>
                        <HorizontalBarSeries data={perceptions}/>
                        <YAxis left={100}
                               tickFormat={(t, i) => <tspan>{rankMapping[t]}</tspan>}
                        />
                    </XYPlot>
                </Grid>
                <Grid item xs={4}/>
            </Grid>
        </div>
    );
}