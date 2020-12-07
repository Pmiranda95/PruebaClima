import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import {getClimaCity} from '../../../API/redux/actions/ActionsClima';
import ViewClima from './ViewClima';
import  './Clima.css';
import { Grid } from '@material-ui/core';

class  CardClima extends React.Component{
 
    componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.location !== this.props.location){
          this.props.getClimaCity(this.props.location.data.regionName)
      }
        
    }

  render(){
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
                  timezone={this.props.clima.data.timezone}
                  humidity={this.props.clima.data.main.humidity}
              />  
            </div>:null
          }
        </Grid>
          
      );
  }
  
}

const mapDispatchToProps = dispatch => ({
    getClimaCity: bindActionCreators(getClimaCity, dispatch),
  })
  
  const mapStateToProps = state => ({
  location: state.location.locationActual,
  clima: state.clima.climaCity
  })

export default connect(mapStateToProps,mapDispatchToProps) (CardClima);
