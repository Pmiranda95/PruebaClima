import React from 'react'
import Grid from '@material-ui/core/Grid';
import  './Clima.css';

const  ViewClima = (props) => {

    const {name,min,max,temp,description,timezone} = props

  return (
    <div className="ViewClima">
    <Grid lg={8}>
        <h2>{name}</h2>
        <h3>{timezone}</h3>
        <h3>{description}</h3>
    </Grid>
    <Grid className="ViewClima_Colum2" lg={8}>
        <Grid lg={10}>
        <img src="//ssl.gstatic.com/onebox/weather/48/sunny.png" /><div>{temp}</div>
        </Grid>
        <Grid lg={10}>
            <div>temperatura maxima: {max}</div>
            <div>temperatura minima: {min}</div>
            <div>Humeadad: 60</div>
        </Grid>
    </Grid>
    </div>
  );
}

export default ViewClima;
