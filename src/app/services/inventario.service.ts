import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InventarioService {

  private url = 'https://sibio.cl/duoc/inventario.json';

  constructor(private http: HttpClient) { }

  getJsonData(): Observable<any> {
    return this.http.get(this.url);
  }

}
