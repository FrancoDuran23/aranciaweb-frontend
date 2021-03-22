import { Component, OnInit } from '@angular/core';
import { HeladosService } from 'src/app/services/helados/helados.service';
import { Producto } from './../../models/producto';
import { NgForm } from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';
import { ViewChild,ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IfStmt } from '@angular/compiler';
import { from } from 'rxjs';

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-heladosservidor',
  templateUrl: './heladosservidor.component.html',
  styleUrls: ['./heladosservidor.component.css']
})
export class HeladosservidorComponent implements OnInit {

  producto: Producto;
  productos:Array<Producto>;
  fotoElegido? :String | ArrayBuffer | null;
  file?:File;

  constructor(private productoService: HeladosService , private toastr: ToastrService,private storage:AngularFireStorage) { 
    this.producto = new Producto();
    this.productos = new Array<Producto>();
    this.refrescarProductos();
 

  }


  ngOnInit(): void {
   
  }
  onUpload(e:any):void
  {
    if(e.target.files && e.target.files[0]){
      console.log(e.target.files[0]);
      this.file =<File> e.target.files[0];
      const filePath='upload/imagen.png'
      const reader = new FileReader();
      reader.onload = e => this.fotoElegido = reader.result;
      reader.readAsDataURL(this.file);
      const ref=this.storage.ref(filePath);
      const task= this.storage.upload(filePath,this.file);
     
    }
  
  
   
   
    // this.producto.imagen = this.file;
    const reader = new  FileReader();


  }

  refrescarProductos() {
    this.producto = new Producto();
    this.productos = new Array<Producto>();
    this.productoService.getProductos().subscribe(
      (result) => {
        result.forEach((element:Producto) => {
          Object.assign(this.producto, element);
          this.productos.push(this.producto);
          this.producto = new Producto();
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }


  guardarProducto() {
    if(this.producto.activo != true){
      this.producto.activo = false;
    
    this.productoService.addProducto(this.producto).subscribe(
      (result) => {
        
        this.refrescarProductos();
        this.toastr.success('Producto guardado', 'Exito');
      },
      (error) => {
        this.toastr.error(error, 'Error');
      }
    );
    this.producto = new Producto();
  }

  }

  borrarProducto(id: string) {
    this.productoService.deleteProducto(id).subscribe(
      (result) => {
        this.toastr.success('Producto eliminado', 'Exito');
        this.refrescarProductos();
      },
      (error) => {
        this.toastr.error(error, 'Error');
      }
    );
    this.producto = new Producto();
  }
  modificarProducto() {
    this.productoService.updateProducto(this.producto).subscribe(
      (result) => {
        this.toastr.success('Producto modificado', 'Exito');
        this.refrescarProductos();
        this.producto = new Producto();
      },
      (error) => {
        this.toastr.error(error, 'Error');
      }
    );
  }
  

//   public guardarProducto() {
// if(this.producto.activo != true){
//   this.producto.activo = false;
// }
//     console.log(this.producto);
    
//     this.productoService.addProducto(this.producto);
  
//       this.toastr.success('Producto guardado', 'Exito');
  
   
//     this.productos = this.productoService.getProducto();
//     this.producto = new Producto();
    
  
//   }
  // public refreshProductos() {
  //   this.productos = this.productoService.getProducto();
  // }
  // public borrarProducto(pasaj: Producto) {
  //   this.productoService.deleteProducto(pasaj);
  //   this.toastr.success('Producto borrado', 'Exito');
  //   this.refreshProductos();
  //   console.log(this.productos);
  // }
  // public cleanProducto() {
  //   this.producto = new Producto();
  // }
  // public modificarProducto() {
  //   this.productoService.updateProducto(this.producto);
  //   this.toastr.success('Producto modificado', 'Exito');
  //   this.producto = new Producto();
  //   this.refreshProductos();
  // }

  public seleccionarProducto(product: Producto) {
    this.producto = product;
  }
  onSubmit(form: NgForm) {
    form.resetForm();
   
    this.fotoElegido=null;

  }
  

}
