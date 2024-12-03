import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class JsonService {

  private jsonUrl = 'https://water-container-default-rtdb.firebaseio.com/juegos.json';

  constructor(private http: HttpClient) { }

  public getJsonData(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }

}