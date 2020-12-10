import React from 'react'
import Grid from '@material-ui/core/Grid';
import {getFormatDate} from  '../../../API/redux/actions/ActionsDate';
import  './Clima.css';

const  ViewClima = (props) => {

    
  const {name,min,max,temp,description,iconUrl,humidity} = props

  return (
    <div className="ViewClima">
    <Grid >
        <h2>Tiempo en {name}</h2>
        <h3>{getFormatDate()}</h3>
        <h3>{description}</h3>
    </Grid>
    <div className="ViewClima_Colum2" lg={8}>
        <div>
        <img src={`http://openweathermap.org/img/w/${iconUrl}.png`} className="wob_tci" />
        <div className="ViewClima_Colum2_tem" aria-label="°Celsius">{temp.toFixed(0)}</div>
        <span className="wob_t"  aria-label="°Celsius" aria-disabled="true" role="button">°C</span>
        </div>
        <div className="ViewClima_Colum2_description">
            <div>Temp. maxima: {max.toFixed(0)}</div>
            <div>Temp. minima: {min.toFixed(0)}</div>
            <div>Humeadad: {humidity+" %"}</div>
        </div>
    </div>
    </div>
  );
}

export default ViewClima;
