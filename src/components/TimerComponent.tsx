import React from 'react';
import '../css/timer.css';

export const TimerComponent = (props: any) => {
    let {time} = props;
    let color = ["rgba(244, 175, 100, 0.5)","rgba(95, 128, 185, 0.5)","rgba(128, 196, 131, 0.5)"]
    const randomElement = color[Math.floor(Math.random() * color.length)];
    let width = ["40px","90px","270px"]
    const randomWidth = width[Math.floor(Math.random() * width.length)];
    return (
    <div className="timer-container align-center">
        <div style={{width:randomWidth,backgroundColor:randomElement,borderColor:randomElement}} className="timer align-center">{time}</div>
    </div>
    )
}