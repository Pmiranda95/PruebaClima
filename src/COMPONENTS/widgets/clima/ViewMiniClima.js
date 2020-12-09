import React from 'react'
import  './Clima.css';
const  ViewMiniClima = (props) => {

    const {min,max,id,fecha,icon} = props; 

    const getDate = (fecha)=> {
        let objFecha = new Date(fecha);
        let dia 
        if(objFecha.getDay()===0){
            dia="Dom"
        }
        if(objFecha.getDay()===1){
            dia="Lun"
        }
        if(objFecha.getDay()===2){
            dia="Mar"
        }
        if(objFecha.getDay()===3){
            dia="Mie"
        }
        if(objFecha.getDay()===4){
            dia="Jue"
        }
        if(objFecha.getDay()===5){
            dia="Vie"
        }
        if(objFecha.getDay()===6){
            dia="Sab"
        }
        return dia;
    }
    
  return (
      <li>
        <div className="mie">{getDate(fecha)}</div>
        <img class="imagList" src={`http://openweathermap.org/img/w/${icon}.png`}></img>
        <nav>{min.toFixed(0)}</nav>
        <nav>{max.toFixed(0)}</nav>
      </li>
  );
}

export default ViewMiniClima;
