function getWeather(){
    let city=document.getElementById("city")

    let url=`https://api.weatherapi.com/v1/current.json?key=c0f4bacd17b24aaca7d155455232906&q=${city.value}`
    console.log(url)

    fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)
            let temperature=data.current.temp_c;
            let condition=data.current.condition.text;

            let newresult=document.getElementById("result")
            newresult.innerHTML=`Condition : ${condition} <br/> temperature : ${temperature} C`
            
        })
        .catch(function(error){
            let newresult=document.getElementById("result")
            newresult.innerHTML=`Location not Found`  
            console.log(error)
        });
}