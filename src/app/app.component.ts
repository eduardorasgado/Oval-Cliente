import { Component } from '@angular/core';

@Component({
  // etiqueta html q se usa para incluir en el html
  selector: 'app-root',
  templateUrl: './app.component.html',
  // estilos de solo este componente, si son varios se separan por comas
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Oval Store';

  curso: string = 'Curso de manejo de Angular 7/8 con Spring 5';
  profesor: string = 'Andrés Guzmán de Udemy';
  alumno: string = 'Eduardo Rasgado Ruiz';
}
