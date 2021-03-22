export class Producto {
    _id!:string;
    nombre?:string;
    imagen?:string;
    activo?:boolean;
    precio?:number;
    descripcion?:string;

    Producto(_id:string , nombre:string , imagen:string , activo:boolean , precio:number , descripcion:string){
        this._id = _id;
        this.nombre = nombre;
        this.imagen =imagen;
        this.activo = activo;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}
