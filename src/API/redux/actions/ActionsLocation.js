import { getLocationNow } from "../../api";

export const getLocation = () => async dispatch => {
    try{
        let data = await getLocationNow();
        console.log("dafas"+data);
        dispatch({
            type:"getLocation",
            payload: data
        });
    }catch(e){
        console.log("error:"+e);
    }
}


