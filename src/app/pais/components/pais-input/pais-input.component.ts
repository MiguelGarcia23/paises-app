import { Component, EventEmitter, Output } from '@angular/core';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  termino: string = '';

  buscar(){
    this.onEnter.emit( this.termino );
  }

}
