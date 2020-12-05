import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getClimaCity} from './API/redux/actions/prueba'

const  App = () => {
   const  climaCity = useSelector(state => state.clima.estadoprueba)
   const dispatch = useDispatch();
  return (
    <div className="App">
      fasdfasf {climaCity}

      <p>cambiar clima</p> <button onClick={()=>{dispatch(getClimaCity('Soy el nuevo estado hdp'))}}> Cambiame de estado</button>
    </div>
  );
}

export default App;
