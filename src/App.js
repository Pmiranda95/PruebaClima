import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { getLocation } from "./API/redux/actions/ActionsLocation";
import Container from '@material-ui/core/Container';
import CardClima from './COMPONENTS/widgets/clima/CardClima';

class  App extends React.Component { 

  componentDidMount(){
    this.props.getLocation();
  }

  render(){
    return (
      <div className="App">
        <Container maxWidth="sm">
          <CardClima />
        </Container>
        
      </div>
    );
  }
  
}

const mapDispatchToProps = dispatch => ({
  getLocation: bindActionCreators(getLocation, dispatch),
})

const mapStateToProps = state => ({
  location: state.location.locationActual
})
export default connect(mapStateToProps,mapDispatchToProps) (App);
