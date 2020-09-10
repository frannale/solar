import React,{useState,useEffect} from "react";
import { Button, Avatar} from "@material-ui/core";
import axios from 'axios';



const CurrentWeather = (props) => {

  const [currentWeather,setCurrentWeather] = useState("");
  const [currentWeatherIcon,setCurrentWeatherIcon] = useState("");

  useEffect(() => {
    // SETEO DEL DIA DE  HOY 
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var hora = today.getHours();
    today =  yyyy  + '-' + mm + '-' + dd;
    // API KEY
    var key = 'fc56ef3290d74b4a9a2235728201608';
    
    axios.get( 'http://api.weatherapi.com/v1/history.json?key='+ key +'&q=-34.874408,-58.083395&dt='+today,

    ).then(function(result){      
      // SETEO DE ICONO Y VALORES METEORILOGICOS DEL DIA
      let info = result.data.forecast.forecastday[0].day
      let actual = result.data.forecast.forecastday[0].hour[hora];
      setCurrentWeatherIcon(actual.condition.icon)
      setCurrentWeather("Max: " + info.maxtemp_c + "°  |  Min: " + info.mintemp_c +
             "°  |  Ahora: " + actual.temp_c + "°  |  Nubosidad: " + actual.cloud +"%")
             
    })
    .catch(function(){
      setCurrentWeather(" Meteorologia no disponible ")
      setCurrentWeatherIcon("./soloo.png")
    });
  });

  return (  <div>
            <Button >
              <Avatar src={currentWeatherIcon} style={{height:'90%',width:'90%'}}/>
            </Button>
            <Button >
            {currentWeather}
            </Button>
            </div>


  );
};

export default CurrentWeather;