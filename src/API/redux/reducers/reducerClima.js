let initialState = {
    climaCity:null,
    climaSelect:null,
    climasAfterCity:null
}

function reducer (store=initialState, action){
        switch (action.type){
            case 'getClimaCity':
                if(!action.payload){
                    return null
                }
                return {...store,climaCity:action.payload} 
            case 'getClimaSelectCity':
                if(!action.payload){
                    return null
                }
                return {...store,climaSelect:action.payload} 
            case 'getAfterClimaCity':
                if(!action.payload){
                    return null
                }
                return {...store,climasAfterCity:action.payload} 
            default:
                return store;    
        }
}

export default reducer ;