import { useState } from "react"
export default function Weather(){
    const[city,setCity]=useState("");
    const[weather,setWeather]=useState(null);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState("");
    const getWeather=async()=>{
        if(city.trim()==="") return;
        setLoading(true);


        try{
            const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=baad9bfbd3b51fef54a15dc0bf261247&units=metric`);
            const data=await res.json();
            if(data.cod!==200){
                setError("error Loading");
                setWeather(null);
            }else{
            setWeather(data);}
        }
        catch(error){
        console.log("Error Fetching weather:",error);
        setWeather(null);
        }

        finally{
            setLoading(false);
        }
    };


    return(
        <div>
            <h2>Weather App</h2>
            <input type="text" value={city} placeholder="City Name"
            onChange={(e)=>setCity(e.target.value)}
            onKeyDown={(e)=>{
                if(e.key==="Enter")
                    getWeather();
            }}/>
            <button onClick={getWeather}>Get Weather</button>
            {weather && weather.main&&(
            <div>
               <h2>{weather.name}</h2> 
               <p>Tempearture:{weather.main.temp}</p>
               <p>{weather.weather[0].main}</p>
               {loading&&<p>Loading...</p>}
              </div> 
              
            )} 
        </div>
            

    );

}