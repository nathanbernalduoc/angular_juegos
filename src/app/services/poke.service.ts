import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private url = 'https://pokeapi.co/api/v2/pokemon/ditto';

  constructor(private http: HttpClient) { }

  getPokeData(): Observable<any> {
    return this.http.get(this.url);
  }

}
