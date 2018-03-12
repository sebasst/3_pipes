import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Sebastian';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heror = {
    nombre: "sebas",
    apellido: "salazar",
    casa: 19,
    direccion: {
      calle: "primera",
      numero: "12"
    }
  };
  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('llego la data'), 3500);
  });
  fecha = new Date();
  nombre2 = "sebastian salazar taPIa";
  video='jOVr_AQwROE';
  activar=true;
  contra='q relajo';
}
