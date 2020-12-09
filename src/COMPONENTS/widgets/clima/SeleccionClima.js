import React,{useState} from 'react'
import Tags from './tags'
import  './Clima.css';
import ViewClima from './ViewClima';
import { useSelector } from 'react-redux';
const  SeleccionClima = () => {
  const clima = useSelector(state => state.clima.climaSelect)

  return (
    <div className="SeleccionClima">
    <Tags />
    {clima!==null &&
    <ViewClima 
      name={clima.data.name}
      temp={clima.data.main.temp}
      max={clima.data.main.temp_max}
      min={clima.data.main.temp_min}
      description={clima.data.weather[0].description}
      timezone={clima.data.timezone}
      humidity={clima.data.main.humidity}
      iconUrl={clima.data.weather[0].icon}
    />
    }
    </div>
  );
}

export default SeleccionClima;
