import React from 'react'
import Tags from './tags'
import  './Clima.css';
import ViewClima from './ViewClima';
import { useSelector } from 'react-redux';
const  SeleccionClima = () => {
  const clima = useSelector(state => state.clima.climaSelect)

  return (
    <div className="SeleccionClima">
      <h2 className="selectClima">Ciudades  de Latino America</h2>
      <p className="selectClima_p">Estas son algunas de las ciudades mas importantes de Latino America, seleccione para ver el clima.</p>
    <Tags />
    {clima!==null &&
    <div>
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
    {
      /*Aclaracion, si se desea mostrar los climas  de   los 5 dias posteriores de cada ciudad seleccionada
      se debe llamar el componente <ListClima> y pasar los parametros correspodintes para visualizarlo al igual que se hizo en <CardClima>*/ 
    //<ListClima climasAfterCity={}/>
    }
    </div>
    }
    </div>
  );
}

export default SeleccionClima;
