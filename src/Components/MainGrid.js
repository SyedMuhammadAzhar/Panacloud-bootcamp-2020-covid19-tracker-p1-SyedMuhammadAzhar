import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GlobalData from './GlobalData';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MainGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        
        <Grid item xs={5} sm={4}>
          <Paper className={classes.paper}>
            <GlobalData/>
            </Paper>
        </Grid>
        <Grid item xs={7} sm={8}>
          <Paper className={classes.paper}>Contry Data</Paper>
        </Grid>
       
      </Grid>
    </div>
  );
}
