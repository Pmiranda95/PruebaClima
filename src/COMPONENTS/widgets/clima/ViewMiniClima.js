import React from 'react';
import {getDate} from '../../../API/redux/actions/ActionsDate';
import  './Clima.css';

const  ViewMiniClima = (props) => {

    const {min,max,id,fecha,icon} = props; 
    
  return (
      <li key={id}>
        <div className="mie">{getDate(fecha)}</div>
        <img className="imagList" src={`http://openweathermap.org/img/w/${icon}.png`}></img>
        <nav>{min.toFixed(0)}</nav>
        <nav>{max.toFixed(0)}</nav>
      </li>
  );
}

export default ViewMiniClima;
