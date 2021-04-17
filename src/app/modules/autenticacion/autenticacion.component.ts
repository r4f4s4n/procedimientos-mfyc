import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.scss']
})
export class AutenticacionComponent {

  constructor() { }

  public registroForm: FormGroup;

  esDesplazarPanel: boolean = false;

  desplazarPanel() {
    this.esDesplazarPanel = !this.esDesplazarPanel;
  }


}
