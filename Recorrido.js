export default class Recorrido{
    constructor(recorrido){
        this._recorrido = recorrido;
        this.inicio = null;
        this.final = null;
        this.temporal = null;
        this.tamaño = 0;
    }

    _addObj(base){
        let objBase = {
            id : base.id,
            nombre : base.nombre,
            minutos : base.minutos
        };
    this._imprimir(objBase);
    }

    agregar(newBase){
        let newBase = new Recorrido(objBase, null);
        if(!this.inicio){
            this.inicio = newBase;
            this.final = this.inicio;
        } else {
            let concurrente = this.inicio;
            while(concurrente.siguiente){
                concurrente = concurrente.siguiente;
            }
            concurrente.siguiente = newBase;
            this.final = concurrente.siguiente;
        }
        this.tamaño++;
        console.log(this._imprimir(newBase));
    }

    _imprimir(base){
        if(this.tamaño === 0){
            return null;
        }
        let actual = this.inicio;
        let resultado = "";
        while(actual){
            resultado += actual.base += "->";
            actual = actual.siguiente;
        }
         resultado += "x";
         return resultado;
    }
}