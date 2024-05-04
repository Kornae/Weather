import React from "react";
import CustomizedInputBase from "./SearchBar";

export default function WeatherCards(props) {
    return (
        <div id='card-section' className='container'>
            <div id='city-div'>
                <CustomizedInputBase
                    change={props.change}
                    click={props.click}
                    onKeyDown={props.onKeyDown}
                    submit={props.submit}
                />
            </div>


            <div className='card' id='temp-cards'>
                <p className="label-2" id='label'>UV Index</p>
                <p id='label-content'>{props.uv}</p>
            </div>

            <div className='card' id='temp-cards'>
                <p className="label-2" id='label'>Wind Status</p>
                <p id='label-content'>{props.wind} km/h</p>
            </div>
            <div className='card' id='temp-cards'>
                <p className="label-2" id='label'>Humidity</p>
                <p id='label-content'>{props.humidity}%</p>
            </div>
            <div className='card' id='temp-cards'>
                <p className="label-2" id='label'>Visibility</p>
                <p id='label-content'>{props.visibility} mi</p>
            </div>
            <div className='card' id='temp-cards'>
                <p className="label-2" id='label'>Feels Like</p>
                <p id='label-content'>{props.feelslike}°</p>
            </div>
        </div>
    )
}