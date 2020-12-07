import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import {getClimaCity} from '../../../API/redux/actions/ActionsClima';

class  ViewClima extends React.Component{
 
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.getClimaCity(this.props.location.data.regionName)
    }

  render(){
    return (
        <div className="cardClima">
          <p>cambiar clima</p> <button > Cambiame de estado</button>{}
        </div>
      );
  }
  
}

const mapDispatchToProps = dispatch => ({
    getClimaCity: bindActionCreators(getClimaCity, dispatch),
  })
  
  const mapStateToProps = state => ({
  location: state.location.locationActual
  })

export default connect(mapStateToProps,mapDispatchToProps) (ViewClima);
