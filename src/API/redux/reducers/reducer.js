let initialState = {
    estadoprueba:"HOla soy un estado"
}

function reducer (store=initialState, action){
    console.log("entre al reducer este es mi action: " + action);
        switch (action.type){
            case 'getClimaCity':
                if(!action.payload){
                    return null
                }
                return {...store,estadoprueba:action.payload} 
            default:
                return store;    
        }
}

export default reducer ;