export const getDate = (fecha) => {
    let objFecha = new Date(fecha);
    let dia 
    if(objFecha.getDay()===0){
        dia="Dom"
    }
    if(objFecha.getDay()===1){
        dia="Lun"
    }
    if(objFecha.getDay()===2){
        dia="Mar"
    }
    if(objFecha.getDay()===3){
        dia="Mie"
    }
    if(objFecha.getDay()===4){
        dia="Jue"
    }
    if(objFecha.getDay()===5){
        dia="Vie"
    }
    if(objFecha.getDay()===6){
        dia="Sab"
    }
    return dia;
}

export const getFormatDate = () => {
    let objFecha = new Date();
    let dia = getDate(objFecha) +". "+objFecha.getDate();
    return dia;
}



