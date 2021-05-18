import React,{useState,useEffect} from 'react'
import {Line,Bar} from 'react-chartjs-2'




const Chart=()=>{

    let [dailyData,setDailyData]=useState();
    let [isFetched,setIsFetched]=useState(false);

    useEffect(()=>{

        

        const fetchData=async()=>{
            setIsFetched(true);
    
            const res=await fetch('https://covid19.mathdro.id/api/daily');
            console.log("dailydata res",res);
            const data= await res.json();
            console.log("dailydata",data);

            const Modifieddata=data.map((data)=>({
                confirmed:data.confirmed.total,
                deaths:data.deaths.total,
                date:data.reportDate
            }))
             await setDailyData(Modifieddata);
            
            setIsFetched(false);
    
        }
    
        fetchData();
        
    
    
    
    },[])



    const LineChart=()=>{
        if(!isFetched && dailyData){
            console.log("asdasdasd",dailyData)
            return(<Line
                data={{
                    labels:dailyData.map(({date})=>date),
                    datasets:[{
                        data:dailyData.map(({confirmed})=>confirmed),
                        label:"infected",
                        borderColor:'orange',
                        fill:true
        
        
                    },{
                        data:dailyData.map(({deaths})=>deaths),
                        label:"Deaths",
                        borderColor:"red",
                        fill:true
                    }]
        
                }}
            />)
            

        }else{
            <h1>loading</h1>
        }
      
         
    }
    
    return(
        <>
        {LineChart()}
        </>

    )
}

export default Chart;