export const getClimaCity = (name) => dispatch => {
    dispatch({
        type:"getClimaCity",
        payload: name
    });
}