import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Persona, PersonaWhat } from 'src/app/interfaces/persona';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-tabla-personas',
  templateUrl: './tabla-personas.component.html',
  styleUrls: ['./tabla-personas.component.css']
})
export class TablaPersonasComponent implements OnInit {

  public displayedColumns: string[] = [
    'id',
    'usuario',
    'password',
    'name',
    'surname',
    'company_email',
    'personal_email',
    'city',
    'active',
    'created_date',
    'imagen_url',
    'termination_date'
  ];

  public listaPersonas: PersonaWhat[] = [];

  public dataSource = new MatTableDataSource<PersonaWhat>(this.listaPersonas);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  
  constructor(private personaServices: PersonasService) { 
    
  
  }


  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    
    this.dataSource = new MatTableDataSource<PersonaWhat>(this.listaPersonas);
    this.personaServices.cargarPersonas()
      .subscribe(listPersons => {


        this.listaPersonas = listPersons;
        console.log(this.listaPersonas);
        //console.log('dddd' + JSON.stringify(listPersons[0]));
      });

    }

}
