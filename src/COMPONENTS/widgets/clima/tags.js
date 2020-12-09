import React from 'react'
import {useDispatch} from 'react-redux'
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import {getClimaCity} from '../../../API/redux/actions/ActionsClima'
import  './Clima.css';

const  Tags = (props) => {
   
  const dispatch = useDispatch();


  return (
    
    <div>
        <Chip
        label="Lomas de Zamora"
        onClick={() => dispatch(getClimaCity('Montevideo','getClimaSelectCity'))}
        deleteIcon={<DoneIcon />}
        variant="outlined"
              />

        <Chip
        label="Sucre"
        onClick={() => dispatch(getClimaCity('Sucre','getClimaSelectCity'))}
        deleteIcon={<DoneIcon />}
        variant="outlined"
              />
    </div>
        
    
  );
}

export default Tags;
