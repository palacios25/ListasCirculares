



function objTransporte(){
    let nombreCamion = document.querySelector("#nombre").value;
    let duracionTiempo = Number(document.querySelector("#tiempo").value);
    console.log(nombreCamion);
    let objTransporte = {
        nombreCamion : nombreCamion,
        duracionTiempo : duracionTiempo
    }
    //let transporte = new Transporte(objTransporte);
}



function borrar(transporte){
    let actual = this.inicio;
    let previo = null;

    while(actual != null){
        if(actual.transporte === transporte){
            if(!previo){
                this.inicio = actual.siguiente;
            } else {
                previo.siguiente = actual.siguiente;
            }
            this.else--;
            return actual.transporte;
        }
        previo = actual;
        actual = actual.siguiente;
    }
    console.log("se borro" + imprimir(transporte));
}

