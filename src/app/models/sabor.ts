export class Sabor {
    _id!:string;
    nombre?:string;
    imagen?:string;   
    activo?:boolean;
    descripcion?:string;

    Sabor(_id:string , nombre:string , imagen:string ,activo:boolean , descripcion:string){
        this._id = _id;
        this.nombre = nombre;
        this.imagen =imagen;     
        this.activo = activo;  
        this.descripcion = descripcion;
    }
}