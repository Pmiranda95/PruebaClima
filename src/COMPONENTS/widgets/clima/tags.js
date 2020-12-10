import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import {getClimaCity} from '../../../API/redux/actions/ActionsClima';
import {getCitys} from '../../../API/redux/actions/ActionsCitys';
import  './Clima.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const  Tags = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const citys = useSelector(state => state.citys.citys)
  useEffect(() => {
    dispatch(()=>getCitys())
  });

  return (
    
    <div className={classes.root}>

      {
        citys.map(name=> <Chip
          label={name}
          onClick={() => dispatch(getClimaCity(name,'getClimaSelectCity'))}
          deleteIcon={<DoneIcon />}
          variant="outlined"
                /> )
      }
    </div>
        
    
  );
}

export default Tags;
