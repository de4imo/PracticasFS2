import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import {Persona, PersonaWhat } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor( private http: HttpClient) { }

  cargarPersonas(){
    const url = 'http://localhost:8080/getall'

    return this.http.get<Persona[]>(url)
    .pipe(
      map ( resp => {
        //console.log(resp);
        return resp.map(pers => PersonaWhat.personaDesdeJson(pers) )
      })
    );

  }
}
