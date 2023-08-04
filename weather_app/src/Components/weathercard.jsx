import React from "react"
const Weathercard=({weaCardInfo})=>{
    
    const {name,region,country,localtime,temp_c,wind_dir,feelslike_c,cloud,humidity,text,icon}=weaCardInfo
    return(
        <>
         <div className="content">
                    <img style={{margin:'25px'}} src={icon} alt="description" />
                    <div style={{color:'white'}}>{text}</div>
                    
                    <span className="details">🌡{temp_c} &#xb0; C</span>
                    <span className="details">🌏{name},{region},{country}</span>
                    <span className="details">📅{localtime}</span>
                    
                    <div className="condition-details">     
                        <span className="condition">Humidity: {humidity}</span>
                        <span className="condition">☁: {cloud}</span>
                        <span className="condition">🌬WindDir: {wind_dir}</span>
                        <span className="condition">❄Feelslike: {feelslike_c} &#xb0; C</span>
                    </div>
                </div>
        </>
    )

}
export default Weathercard