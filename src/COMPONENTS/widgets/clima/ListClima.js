import React from 'react'
import ViewMiniClima from './ViewMiniClima'
import  './Clima.css';
import { Grid } from '@material-ui/core';

const  ListClima = (props) => {

  return (
    <Grid sm={12} lg={12} className="listClima">
        <ul  sm={12} id="lista1">
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
    </Grid>
  );
}

export default ListClima;
