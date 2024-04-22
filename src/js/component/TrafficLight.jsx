import { useState } from 'react';
import React  from "react";
import trafficLight from '../../styles/trafficLight.css'

export const TrafficLight = ()=>{

    const [color, setColor] = useState('red');

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="trafficLight  mt-5">
            <div className={"redLight " + (color === 'red' ? "glow-red" : '')} onClick={()=> setColor ('red')}></div>
            <div className={"yellowLight " + (color === 'yellow' ? "glow-yellow" : '')} onClick={()=> setColor ('yellow')}></div>
            <div className={"greenLight " + (color === 'green' ? "glow-green" : '') + (color==='purple' ? 'd-none' : '')} onClick={()=> setColor ('green')}> </div>
            <div className={'purpleLight ' + (color === 'purple' ? 'glow-purple' : 'd-none')}></div>
            <button type="button" class="btn btn-outline-secondary mt-5" onClick={()=>setColor('purple')}>Click me for purple light!</button>
            </div>
            
        </div>
    )
}