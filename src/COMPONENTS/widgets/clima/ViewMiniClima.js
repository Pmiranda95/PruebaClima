import React from 'react';
import {getDate} from '../../../API/redux/actions/ActionsDate';
import  './Clima.css';

const  ViewMiniClima = (props) => {

    const {min,max,id,fecha,icon} = props; 
    
  return (
      <li key={id}>
        <div className="mie">{getDate(fecha)}</div>
        <img className="imagList" src={`http://openweathermap.org/img/w/${icon}.png`}></img>
        <div>
        <env>{min.toFixed(0)}</env> . <env>{max.toFixed(0)}</env>
        </div>
      </li>
  );
}

export default ViewMiniClima;
