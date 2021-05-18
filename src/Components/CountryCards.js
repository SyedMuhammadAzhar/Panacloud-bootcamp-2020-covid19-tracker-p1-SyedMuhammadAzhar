import React,{useState,useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: 'flex',
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  infected:{
    borderBottom:'2px solid red'
  }

});

export default function CountryCards() {
  const classes = useStyles();



  
    let [countires,setCountires]=useState();
    let [isFetched,setIsFetched]=useState(false);

    useEffect(()=>{

        const fetchData=async ()=>{
          setIsFetched(true);

            const res= await fetch('https://api.covid19api.com/summary');
            const data= await res.json();
           await setCountires(data);
            // console.log("Countires Data-->",data.Countries[0])

            setIsFetched(false);

        }

        fetchData();
        
    },[setCountires])






  return (


    <>
  
      <Grid container spacing={3} justify="center">
      <Grid item component={Card} sm={4} xs={12}style={{borderBottom:'6px solid orange'}}>
        <CardContent >
          <Typography color="textSecondary" gutterBottom style={{color:"#334443",fontWeight:"bold"}}>
            Total Cases
          </Typography>
          <Typography variant="h5" gutterBottom>
                  
            {isFetched?"Loading...":countires && countires.Global && <CountUp 
            start={0}
            end={countires.Global.TotalConfirmed}
            duration={2.75}
            separator=","
            > </CountUp>}

          </Typography>
          <Typography variant="h5" gutterBottom>
          {isFetched?"Loading...":countires && countires.Countries[0] && countires.Countries[0].Country}
          </Typography>
          <Typography variant="body2" gutterBottom>
          {isFetched?"Loading...":countires && countires.Countries[0] && new Date(countires.Countries[0].Date).toDateString()}
          </Typography>
        </CardContent>

      </Grid>
      



      <Grid item component={Card} sm={4} xs={12} style={{borderBottom:'6px solid red'}}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom style={{color:"red",fontWeight:"bold"}}>
            Fatalities
          </Typography>
          <Typography variant="h5" gutterBottom>
          {isFetched?"Loading...":countires && countires.Global && <CountUp 
            start={0}
            end={countires.Global.TotalDeaths}
            duration={2.75}
            separator=","
            > </CountUp>}
          </Typography>
          <Typography variant="h5" gutterBottom>
          {isFetched?"Loading...":countires && countires.Countries[0] && countires.Countries[0].Country}
          </Typography>
          <Typography variant="body2" gutterBottom>
          {isFetched?"Loading...":countires && countires.Countries[0] && new Date(countires.Countries[0].Date).toDateString()}
          </Typography>
        </CardContent>

      </Grid>



      <Grid item component={Card} sm={4} xs={12} style={{borderBottom:'6px solid green'}}>
        <CardContent >
          <Typography color="textSecondary" gutterBottom style={{color:"green",fontWeight:"bold"}}>
            Recovered
          </Typography>
          <Typography variant="h5" gutterBottom >
          {isFetched?"Loading...":countires && countires.Global && <CountUp 
            start={0}
            end={countires.Global.TotalRecovered}
            duration={2.75}
            separator=","
            > </CountUp>}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {isFetched?"Loading...":countires && countires.Countries[0] && countires.Countries[0].Country}
          </Typography>
          <Typography variant="body2" gutterBottom>
          {isFetched?"Loading...":countires && countires.Countries[0] && new Date(countires.Countries[0].Date).toDateString()}
          </Typography>
        </CardContent>

      </Grid>



    </Grid>

   
    

    </>


  );
}
