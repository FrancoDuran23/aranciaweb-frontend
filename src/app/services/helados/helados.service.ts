import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class HeladosService {
  urlBase: string = 'https://arancia-server.herokuapp.com/api/producto/';

  constructor(private _http: HttpClient) {}

  getProductos(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
    };
    return this._http.get(this.urlBase, httpOptions);
  }

  addProducto(producto: Producto): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    console.log(httpOptions);
    var body = JSON.stringify(producto);
    return this._http.post(this.urlBase, body, httpOptions);
  }

  deleteProducto(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
    };
    return this._http.delete(this.urlBase + id, httpOptions);
  }

  updateProducto(producto: Producto): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    var body = JSON.stringify(producto);
    return this._http.put(this.urlBase + producto._id, body, httpOptions);
  }
  getProductosActivos(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
    };
    return this._http.get(this.urlBase + 'activo', httpOptions);
  }
}