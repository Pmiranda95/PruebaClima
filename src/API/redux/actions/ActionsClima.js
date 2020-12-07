import { getClima } from "../../api";

export const getClimaCityNow = (location) => async dispatch => {
    try{
        let data = await getClima(location);
        console.log("dafas"+data);
        dispatch({
            type:"getClimaCity",
            payload: data
        });
    }catch(e){
        console.log("error:"+e);
    }
}


export const getClimaCity = (location) => async dispatch => {
    try{
        let data = await getClima(location);
        console.log("dafas"+data);
        dispatch({
            type:"getClimaCity",
            payload: data
        });
    }catch(e){
        console.log("error:"+e);
    }
}