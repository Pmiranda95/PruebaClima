let initialState = {
    citys:['Santiago','Montevideo','Sucre','Lima','Brasilia','Bogota']
}

function reducer (store=initialState, action){
        switch (action.type){
            case 'getCitys':
                return {...store,locationActual:store.citys} 
            default:
                return store;    
        }
}

export default reducer ;