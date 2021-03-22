import { Injectable } from '@angular/core';
import { Sabor } from 'src/app/models/sabor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SaboresService {
  urlBase: string = 'https://arancia-server.herokuapp.com/api/sabor/';

  constructor(private _http: HttpClient) {}

  getSabores(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
    };
    return this._http.get(this.urlBase, httpOptions);
  }

  addSabor(sabor: Sabor): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    var body = JSON.stringify(sabor);
    return this._http.post(this.urlBase, body, httpOptions);
  }

  deleteSabor(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
    };
    return this._http.delete(this.urlBase + id, httpOptions);
  }

  updateSabor(sabor: Sabor): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    var body = JSON.stringify(sabor);
    return this._http.put(this.urlBase + sabor._id, body, httpOptions);
  }
  getSaboresActivos(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
    };
    return this._http.get(this.urlBase + 'activo', httpOptions);
  }
}