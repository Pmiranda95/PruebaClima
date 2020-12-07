let initialState = {
    climaCity:null
}

function reducer (store=initialState, action){
    console.log("entre al reducer este es mi action: " + action.type);
        switch (action.type){
            case 'getClimaCity':
                if(!action.payload){
                    return null
                }
                return {...store,climaCity:action.payload} 
            default:
                return store;    
        }
}

export default reducer ;