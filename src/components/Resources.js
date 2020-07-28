import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";


const useStyle = makeStyles(theme => ({
    content: {
        margin: theme.spacing(5),
    },
    link: {
        color: 'green',
        fontSize: 24,
        textDecoration: 'underline'
    }
}));

export default function Introduction() {
    const classes = useStyle();
    return (
        <div className="section">
            <Grid container>
                <Grid item xs={2}/>
                <Grid item xs={8}>
                    <h4>Resources</h4>
                    <div className={classes.content}><a className={classes.link} href="https://worldhappiness.report/ed/2020/">World Happiness Report 2019</a></div>
                    <div className={classes.content}><a className={classes.link} href="https://kaggle.com/roshansharma/world-happiness-report">Kaggle Dataset 2019</a></div>
                    <div className={classes.content}><a className={classes.link} href="https://github.com/alvarotrigo/fullPage.js">Fullpage.js for slide show</a></div>
                </Grid>
                <Grid item xs={2}/>
            </Grid>
        </div>
    );
}