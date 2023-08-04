import React, { useEffect, useState }  from "react";
import Weathercard from "./weathercard";
import "./style.css"


const Weather=()=>{

    const[searchValue,setSearchValue]=useState("Narsinghpur,Madhya pradesh")
    const[weaCardInfo,setweaCardInfo]=useState({})

    const getWeatherInfo=async()=>{
        try{
            const url=`https://api.weatherapi.com/v1/current.json?key=ba4c10c6cbb4464b98a161033230308&q=${searchValue}`
            
            const res= await fetch(url);
            const data=await res.json();
             console.log(data)

            const {name,region,country,localtime}=data.location
            const {temp_c,wind_dir,feelslike_c,cloud,humidity,}=data.current;
            const {text,icon}=data.current.condition;

            const newWeatherInfo={
                name,region,country,localtime,temp_c,wind_dir,feelslike_c,cloud,humidity,text,icon
            }

            setweaCardInfo(newWeatherInfo);

        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getWeatherInfo();
    },[])
   
    return (
        <>
        <div className="main">
            <div className="container">
                <img class="image-gif" src="Images/wea.gif" alt="description" />
                <div className="search">
                    <input className="input-css" type="text" placeholder="city.." value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
                    <button onClick={getWeatherInfo} >Search</button>
                </div>
                <Weathercard weaCardInfo={weaCardInfo} />   
            </div>
        </div>
        </>
    );
}
export default Weather;
