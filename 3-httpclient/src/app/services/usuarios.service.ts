import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReqResResponse, Usuario } from '../models';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient) { }

  cargarUsuarios(){
    const url = 'https://reqres.in/api/users'

    return this.http.get<ReqResResponse>(url)
    .pipe(
      map ( resp => {
        return resp.data.map(user => Usuario.usuarioDesdeJson(user) )
      })
    );
  }
}
