import React, {useEffect, useState} from 'react';
import { useReduxState } from '../../utils/State';
import WeatherCard from '../../components/card/WeatherCard';

const Home = () => {
    const [ {city, country} ] = useReduxState();
    const [weather, setWeather] = useState();
    const [wind, setWind] = useState();
    const [mainInfo, setMainInfo] = useState();

    useEffect(() => {
        const API_KEY = "0ae446b87f727fa6bdc4d19ec01dcb7d";
        const API_URL = "https://api.openweathermap.org/data/2.5/weather?q="+ city.toLowercase +","+ country +"&appid=" + API_KEY;
        
        const fetchData = async () => {

            const res = await fetch(API_URL);
            const resJson = await res.json();
            const { id, main, description, icon } = resJson.weather[0];
            const { deg, speed } = resJson.wind;
            const {temp, pressure, humidity, temp_min, temp_max} = resJson.main;

            setWeather([id, main, description, icon]);
            setWind([ deg, speed ]);
            setMainInfo([ temp, pressure, humidity, temp_min, temp_max ]);
        }

        if (city !== undefined && city !== "" && country !== undefined && country !== ""){
            fetchData();
        }
    }, [city, country]);

    return(
        <>
            { city !== undefined && city !== "" ? (
                <WeatherCard weather={weather} wind={wind} mainInfo={mainInfo} title="Today"/>
            ) : null }
        </>
    )
}

export default Home;