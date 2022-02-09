import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  public usuarios: any = [];

  constructor( private usuariosServices: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosServices.cargarUsuarios()
      .subscribe( usuarios => {

          console.log(usuarios);
          this.usuarios = usuarios;
      });
  }

}
