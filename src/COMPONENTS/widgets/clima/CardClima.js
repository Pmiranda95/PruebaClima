import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import {getClimaCity,getAfterClimaCity} from '../../../API/redux/actions/ActionsClima';
import {getFormatDate} from  '../../../API/redux/actions/ActionsDate';
import ViewClima from './ViewClima';
import ListClima from './ListClima'
import  './Clima.css';
import { Grid } from '@material-ui/core';

class  CardClima extends React.Component{
 
    componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.location !== this.props.location){
          this.props.getClimaCity(this.props.location.data.city,"getClimaCity")
          this.props.getAfterClimaCity(this.props.location.data.city)
      }
        
    }

  render(){
    const timezoneOffset = new Date();

    return (
        <Grid>
          {
            this.props.clima!=null ?
              <div className="cardClima">
                <ViewClima 
                  name={this.props.clima.data.name}
                  temp={this.props.clima.data.main.temp}
                  max={this.props.clima.data.main.temp_max}
                  min={this.props.clima.data.main.temp_min}
                  description={this.props.clima.data.weather[0].description}
                  timezone={getFormatDate(timezoneOffset)}
                  humidity={this.props.clima.data.main.humidity}
                  iconUrl={this.props.clima.data.weather[0].icon}
              />  
              <ListClima climasAfterCity={this.props.climasAfterCity}/>
            </div>:null
          }
        </Grid>
          
      );
  }
  
}

const mapDispatchToProps = dispatch => ({
    getClimaCity: bindActionCreators(getClimaCity, dispatch),
    getAfterClimaCity:bindActionCreators(getAfterClimaCity, dispatch)
  })
  
  const mapStateToProps = state => ({
  location: state.location.locationActual,
  clima: state.clima.climaCity,
  climasAfterCity: state.clima.climasAfterCity
  })

export default connect(mapStateToProps,mapDispatchToProps) (CardClima);
