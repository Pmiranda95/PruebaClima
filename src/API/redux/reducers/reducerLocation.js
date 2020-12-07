let initialState = {
    locationActual:null
}

function reducer (store=initialState, action){
    console.log('reducer location:'+action.payload);
        switch (action.type){
            case 'getLocation':
                if(!action.payload){
                    return null
                }
                return {...store,locationActual:action.payload} 
            default:
                return store;    
        }
}

export default reducer ;