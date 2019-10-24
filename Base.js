export default class Base{
    constructor(base){
        this._id = base.id
        this._nombre = base.nombre;
        this._minutos = base.minutos;
        this.siguiente = null;
        this.anterior = null;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get minutos(){
        return this._minutos;
    }
    set minutos(minutos){
        this._minutos = minutos;
    }
}