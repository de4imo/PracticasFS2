import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  //suscripciones: Array<string> = ['Basica', 'Gratuita', 'Premium']; 

  suscripciones: any = {
    Basica:'Basica',
    Gratuita:'Gratuita',
    Premium:'Premium'
  }

  constructor(private formBuilder : FormBuilder) { }

  registerForm = this.formBuilder.group({
    username: [''],
    password: [''],
    suscripcion: [this.suscripciones.Basica],
    promociones: [true]
  });

  //suscripciones: any[] = [];
  ngOnInit(): void {
    // for (let item in Suscripcion) {
    //   if (isNaN(Number(item))){
    //     this.suscripciones.push({text: item, value: Sucripcion[item]})
    //   }
    // }
  }

  submit() {
    console.log(this.registerForm.value);
  }

  refrescar(){
    this.registerForm.patchValue({
      username: '',
      password: '',
      suscripcion: this.suscripciones.Basica,
      promociones: true
    });
  }
}
