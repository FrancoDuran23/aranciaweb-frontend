import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SaboresService } from 'src/app/services/sabores/sabores.service';
import { Sabor } from 'src/app/models/sabor';
import { ViewChild,ElementRef } from '@angular/core';
@Component({
  selector: 'app-saboresservidor',
  templateUrl: './saboresservidor.component.html',
  styleUrls: ['./saboresservidor.component.css']
})
export class SaboresservidorComponent implements OnInit {
 

  sabor: Sabor;
  sabores:Array<Sabor>;
  fotoElegido? :String | ArrayBuffer | null;
  file?:File;
  constructor(private saborService: SaboresService , private _toastr: ToastrService,) { 
    this.sabor = new Sabor();
    this.sabores = new Array<Sabor>();
    this.refrescarSabores();
  }

  ngOnInit(): void {
  }
  onUpload(e:any):void
  {
    if(e.target.files && e.target.files[0]){
      console.log(e.target.files[0]);
      this.file =<File> e.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.fotoElegido = reader.result;
      reader.readAsDataURL(this.file);
     
    }
    
  
   
   
    // this.Sabor.imagen = this.file;
    const reader = new  FileReader();


  }
  refrescarSabores() {
    this.sabor = new Sabor();
    this.sabores = new Array<Sabor>();
    this.saborService.getSabores().subscribe(
      (result) => {
        result.forEach((element:Sabor) => {
          Object.assign(this.sabor, element);
          this.sabores.push(this.sabor);
          this.sabor = new Sabor();
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }


  guardarSabor() {
    if(this.sabor.activo != true){
      this.sabor.activo = false;
    
    this.saborService.addSabor(this.sabor).subscribe(
      (result) => {
     
        this.refrescarSabores();
        this._toastr.success('Sabor guardado', 'Exito');
      },
      (error) => {
        this._toastr.error(error, 'Error');
      }
    );
    this.sabor = new Sabor();
  }

  }

  borrarSabor(id: string) {
    this.saborService.deleteSabor(id).subscribe(
      (result) => {
        this._toastr.success('Sabor eliminado', 'Exito');
        this.refrescarSabores();
      },
      (error) => {
        this._toastr.error(error, 'Error');
      }
    );
    this.sabor = new Sabor();
  }
  modificarSabor() {
    this.saborService.updateSabor(this.sabor).subscribe(
      (result) => {
        this._toastr.success('Sabor modificado', 'Exito');
        this.refrescarSabores();
        this.sabor = new Sabor();
      },
      (error) => {
        this._toastr.error(error, 'Error');
      }
    );
  }
  

  public seleccionarSabor(product: Sabor) {
    this.sabor = product;
  }
  onSubmit(form: NgForm) {
    form.resetForm();
    // this.photoInput.nativeElement.value = "";
    // this.imgin.nativeElement.value  = '/assets/img/defect.png';
    this.fotoElegido=null;
  }

}
