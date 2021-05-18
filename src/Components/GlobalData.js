import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(16),
    },
  },
}));





export default function GlobalData() {

    let [covidData,setCovidData]=useState();
    let [isFetched,setIsFetched]=useState(false);

    useEffect(()=>{

        async function getDataFromApi(){
    

            setIsFetched(true);
            const response=await fetch(`https://api.covid19api.com/summary`);
            console.log("res->",response);
            const data=await response.json();
            console.log("data->",data);
    
            setCovidData(data);

            console.log("Covid data->",covidData);

            setIsFetched(false);
    
           
    
        }
    
        getDataFromApi();
       
    
    
      },[]);



  const classes = useStyles();

 

  return (
    <div className={classes.root}>

    <Typography variant="h3" style={{color:"grey",fontWeight:"bold"}}>

        Global Data
        
    </Typography>

      <Paper elevation={3}>
      <Typography variant="h6" gutterBottom style={{color:"#334443",fontWeight:"bold"}}>
      {isFetched?"Loading...":covidData && covidData.Global && <CountUp 
      start={0}
      end={covidData.Global.TotalConfirmed}
      duration={2.75}
      separator=","
      > </CountUp>}
      </Typography>

      <Typography variant="subtitle2" gutterBottom>
        Total Cases as of today
      </Typography>


         
      </Paper>

      <Paper elevation={3}>
          
      <Typography variant="h6" gutterBottom style={{color:"green",fontWeight:"bold"}}>

      {isFetched?"Loading...":covidData && covidData.Global && <CountUp 
      start={0}
      end={covidData.Global.TotalRecovered}
      duration={2.75}
      separator=","
      > </CountUp>}


      </Typography>

      <Typography variant="subtitle2" gutterBottom>
        Total Recovered People
      </Typography>


      </Paper>

      <Paper elevation={3}>
        
      <Typography variant="h6" gutterBottom style={{color:"#e1701a",fontWeight:"bold"}}>
      
      {isFetched?"Loading...":covidData && covidData.Global && <CountUp 
      start={0}
      end={covidData.Global.NewConfirmed}
      duration={2.75}
      separator=","
      > </CountUp>}

      </Typography>

      <Typography variant="subtitle2" gutterBottom>
        New Cases
      </Typography>


      </Paper>

      <Paper elevation={3}>
       
      <Typography variant="h6" gutterBottom style={{color:"red",fontWeight:"bold"}}>
      
      {isFetched?"Loading...":covidData && covidData.Global && <CountUp 
      start={0}
      end={covidData.Global.TotalDeaths}
      duration={2.75}
      separator=","
      > </CountUp>}

      </Typography>

      <Typography variant="subtitle2" gutterBottom>
        Fatilites
      </Typography>

      </Paper>

      
      
    </div>
  );
}
