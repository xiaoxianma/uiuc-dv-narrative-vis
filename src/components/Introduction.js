import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import ReactTooltip from "react-tooltip";


const useStyle = makeStyles(theme => ({
    content: {
        color: 'white',
        fontSize: 20,
    }
}));

export default function Introduction() {
    const classes = useStyle();
    return (
        <div className="section">
            <Grid container>
                <Grid item xs={3}/>
                <Grid item xs={6}>
                    <div><h3>Introduction</h3></div>
                    <div className={classes.content} align="left">
                        In this project, we perform a detailed data analysis on the World Happiness Report of 2019.
                        The World Happiness Report is a landmark survey of the state of global happiness. The report
                        reviews the state of happiness in the world and shows how the science of happiness explains
                        personal
                        and national variations in happiness. It is one approach to measuring humanities well-being. There
                        are six factors are selected due to their high contribution to making life evaluation higher in each
                        country including economic production, social support, life expectancy, freedom, absence of corruption,
                        and generosity. They have no impact on the total score reported for each country, but they do
                        explain why some countries rank higher than others.
                    </div>
                </Grid>
                <Grid item xs={3}/>
            </Grid>
        </div>
    );
}