import React from 'react'
import Grid from '@material-ui/core/Grid';
import  './Clima.css';

const  ViewClima = (props) => {

    
  const {name,min,max,temp,description,timezone,iconUrl} = props

  return (
    <div className="ViewClima">
    <Grid >
        <h2>Tiempo en {name}</h2>
        <h3>{timezone}</h3>
        <h3>{description}</h3>
    </Grid>
    <div className="ViewClima_Colum2" lg={8}>
        <div>
        <img src={`http://openweathermap.org/img/w/${iconUrl}.png`} className="wob_tci" />
        <div className="ViewClima_Colum2_tem" aria-label="°Celsius">{temp}</div>
        <span class="wob_t"  aria-label="°Celsius" aria-disabled="true" role="button">°C</span>
        </div>
        <div class="ViewClima_Colum2_description">
            <div>temperatura maxima: {max}</div>
            <div>temperatura minima: {min}</div>
            <div>Humeadad: 60</div>
        </div>
    </div>
    </div>
  );
}

export default ViewClima;
