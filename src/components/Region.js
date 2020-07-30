import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import {Bar, BarChart, Label, LabelList, Tooltip, XAxis, YAxis} from "recharts";


const useStyle = makeStyles(theme => ({
    description: {
        marginTop: theme.spacing(3),
        textAlign: "left",
        fontSize: 16,
    }
}));

export default function Region(props) {
    const classes = useStyle();

    return (
        <div className="section">
            <Grid container>
                <Grid item xs={3}/>
                <Grid item xs={6}>
                    <h4>Happiness Index by Region</h4>
                    <BarChart width={1200} height={600} data={props.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <XAxis dataKey="name" tick="">
                            <Label value="Region" offset={0} position="insideBottom" fill='white' fontSize={20}/>
                        </XAxis>
                        <YAxis label={{ value: 'Average Score', angle: -90, position: 'insideLeft', fill: 'white', fontSize: 20}} />
                        <Tooltip/>
                        <Bar dataKey="score" fill="#7c4dff">
                            <LabelList dataKey="name" position="top" fill="#00e676"/>
                        </Bar>
                    </BarChart>
                    <p className={classes.description}>"Australia and New Zealand" and "North America" are outstanding among the world, and they are the only regions the score is above 7.0.
                    Asia and Africa are the low happiness regions, however Eastern Asia is a special region, which ranks the 4th happiness region.</p>
                </Grid>
                <Grid item xs={3}/>
            </Grid>
        </div>
    );
}