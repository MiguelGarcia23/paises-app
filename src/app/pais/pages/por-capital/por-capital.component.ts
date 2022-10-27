import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  paisesSugeridos   : Country[] = [];
  mostrarSugerencias: boolean   = false;

  constructor( private paisService: PaisService ) {}

  buscar( termino: string ) {

    this.hayError = false;
    this.termino  = termino;
    this.mostrarSugerencias = false;

    this.paisService.buscarCapital( termino )
      .subscribe({
        next: (paises) => {
          this.paises = paises;
        },
        error: (err) => {
          this.hayError = true;
          this.paises   = [];
        }
      })
  }

  sugerencias( termino: string ) {
    this.hayError = false;
    this.termino  = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarCapital( termino )
      .subscribe({
        next: paises => this.paisesSugeridos = paises.splice(0,5),
        error: err => this.paisesSugeridos = []
      })
  }

  buscarSugerido( termino: string ) {
    this.buscar( termino );
  }

}
