import React from "react";

export default function MainContent(props) {
    return (
        <div id='main-content' className='container'>
            <div id='date-div'>
                <p id='city'>{props.date}</p>
            </div>

            <div id='temp-div'>
                <h4 id='city'>{props.location}</h4>
                <h1 id='temp'>{props.tempF}°</h1>
                <p id='description'>{props.conditions}</p>
            </div>

            <div id='days'>
                <div id='card-content'>
                    <p id='label'>{props.today}</p>
                    <p id='label-content'><span id="high">{props.tempF}°</span></p>
                </div>
                <div id='card-content'>
                    <p id='label'>{props.day2}</p>
                    <p id='label-content'><span id="high">{props.temp2}°</span></p>
                </div>
                <div id='card-content'>
                    <p id='label'>{props.day3}</p>
                    <p id='label-content'><span id="high">{props.temp3}°</span></p>
                </div>
                <div id='card-content'>
                    <p id='label'>{props.day4}</p>
                    <p id='label-content'><span id="high">{props.temp4}°</span></p>
                </div>
                <div id='card-content'>
                    <p id='label'>{props.day5}</p>
                    <p id='label-content'><span id="high">{props.temp5}°</span></p>
                </div>
                <div id='card-content'>
                    <p id='label'>{props.day6}</p>
                    <p id='label-content'><span id="high">{props.temp6}°</span></p>
                </div>
                <div id='card-content'>
                    <p id='label'>{props.day7}</p>
                    <p id='label-content'><span id="high">{props.temp7}°</span></p>
                </div>
            </div>
        </div>
    )

}