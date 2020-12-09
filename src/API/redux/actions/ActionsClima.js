import { getClima,getAfterClimas } from "../../api";


export const getClimaCity = (location,type) => async dispatch => {
    try{
        let data = await getClima(location);
        dispatch({
            type:type,
            payload: data
        });
    }catch(e){
        console.log("error:"+e);
    }
}

export const getAfterClimaCity = (location) => async dispatch => {
    try{
        let data = await getAfterClimas(location);
        dispatch({
            type:'getAfterClimaCity',
            payload: data
        });
    }catch(e){
        console.log("error:"+e);
    }
}