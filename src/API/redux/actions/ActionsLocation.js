import { getLocationNow } from "../../api";

export const getLocation = () => async dispatch => {
    try{
        let data = await getLocationNow();
        dispatch({
            type:"getLocation",
            payload: data
        });
    }catch(e){
        console.log("error:"+e);
    }
}


