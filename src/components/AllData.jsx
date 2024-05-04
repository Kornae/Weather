import React, { useState, useEffect } from "react";
import MainContent from "./MainContent";
import WeatherCards from "./CardContent";

export default function AllData() {
    const [weatherData, setWeatherData] = useState([])
    const [city, setCity] = useState('')
    const [search, setSearch] = useState('Los Angeles')

    const key = process.env.REACT_APP_API_KEY;

    const api = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + search + '/?iconSet=icons1&unitGroup=us&include=current&key=' + key + '&contentType=json'
    useEffect(() => {
        fetch(api)
            .then((res) => res.json())
            .then((data) => {
                setWeatherData(data)
            })
    }, [search])

    let handleSubmit = (event) => {
        event.preventDefault()
    }

    let handleChange = (e) => {
        let cityValue = e.target.value;
        setCity(cityValue)
    }

    let handleClick = () => {
        setSearch(city)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setSearch(city)
        }
        event.preventDefault()
    };

    if (weatherData.length === 0) {
        return <div id="main-div" >
        </div>;
    }

    const address = weatherData.resolvedAddress;
    const temp = weatherData?.days[0]?.temp ?? null;
    const temp2 = weatherData.days[1].temp;
    const temp3 = weatherData.days[2].temp;
    const temp4 = weatherData.days[3].temp;
    const temp5 = weatherData.days[4].temp;
    const temp6 = weatherData.days[5].temp;
    const temp7 = weatherData.days[6].temp;

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const sevenDays = weatherData.days.slice(0, 7);

    const date = sevenDays.map((dayData) => {
        const weatherDate = dayData.datetime;
        const [year, month, day] = weatherDate.split("-").map(Number);
        return new Date(year, month - 1, day);
    });

    const conditions = weatherData.days[0].conditions;
    const description = weatherData.days[0].description;
    const wind = weatherData.days[0].windspeed;
    const humidity = weatherData.days[0].humidity;
    const uv = weatherData.days[0].uvindex;
    const visibility = weatherData.days[0].visibility;
    const sunrise = weatherData.days[0].sunrise
    const sunset = weatherData.days[0].sunset
    const feelsLike = Math.round(weatherData.days[0].feelslike)

    return (
        <div className=" main-div">
            <div id='main' className='one'>
                <MainContent
                    date={`${months[date[0].getMonth()]} ${date[0].getDate()}, ${date[0].getFullYear()} `}
                    location={address}
                    description={description}
                    conditions={conditions}
                    tempF={Math.round(temp)}
                    temp2={Math.round(temp2)}
                    temp3={Math.round(temp3)}
                    temp4={Math.round(temp4)}
                    temp5={Math.round(temp5)}
                    temp6={Math.round(temp6)}
                    temp7={Math.round(temp7)}
                    today="Today"
                    day2={days[date[0].getDay()]}
                    day3={days[date[1].getDay()]}
                    day4={days[date[2].getDay()]}
                    day5={days[date[3].getDay()]}
                    day6={days[date[4].getDay()]}
                    day7={days[date[5].getDay()]}
                />

            </div>
            <div id='main-2' className='two'>
                <WeatherCards
                    change={handleChange}
                    click={handleClick}
                    uv={uv}
                    wind={wind}
                    humidity={humidity}
                    visibility={visibility}
                    sunrise={sunrise}
                    sunset={sunset}
                    feelslike={feelsLike}
                    submit={handleSubmit}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    )
}