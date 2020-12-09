import React from 'react'
import ViewMiniClima from './ViewMiniClima'
import  './Clima.css';

const  ListClima = (props) => {
 //const {} =  props.climasAfterCity;

  return (
    <div className="listClima">
        <ul id="lista1">
        {
            
            props.climasAfterCity!=null&&
            props.climasAfterCity.data.list.map( (res,index) => (index==0 || index==7 || index==16 || index==25 || index==34 ) ?
            
            <ViewMiniClima 
             min={res.main.temp_min}  
             max={res.main.temp_max}
             id={res.dt} 
             fecha={res.dt_txt}
             icon={res.weather[0].icon}
            />:null)
        }
        </ul>
    </div>
  );
}

export default ListClima;
