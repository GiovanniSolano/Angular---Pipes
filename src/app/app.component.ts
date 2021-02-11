import { Component } from '@angular/core';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  // CurrencyPipe
  precio: number;

  // DecimalPipe
  numero: number;

  // DatePipe
  fechaActual: Date;

  // PercentPipe
  numAleatorio: number;

  // JSONPipe
  estudiante: any;

  // LowerCase, UpperCase, Title
  texto: string;


  // SlicePipe
  animales: string[];
  minimo: number;
  maximo: number;


  // AsyncPipe
  promesa: Promise<string>;
  promPosts: Promise<any[]>;

  constructor(private postsService: PostsService) {
    this.precio = 198.95442;
    this.numero = 3.5353665;
    this.fechaActual = new Date();
    this.numAleatorio = Math.random();
    this.estudiante = {
      nombre: 'Giovanni',
      apellidos: 'Solano Segura',
      notas: [1, 5, 6, 7]
    };
    this.texto = 'Hola mundo';
    this.animales = ['Perro', 'Gato', 'Gallina', 'Tortuga'];
    this.minimo = 0;
    this.maximo = this.animales.length ;

    this.promesa = new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve('Se resulve la promesa en 4 segundos')
      }, 4000);

    });

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let contador = 1;
    const interval = setInterval(() => {

      if (contador === 10) {
        clearInterval(interval);
      } else {
        this.fechaActual = new Date()
        contador++;
      }

    }, 1000);


    this.promPosts = this.postsService.getAll();

  }


}
