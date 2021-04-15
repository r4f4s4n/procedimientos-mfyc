import { ConfirmacionPasswordService } from '../../../shared/validators/confirmacion-password.service';
import { UsuarioService } from './../../../core/services/usuario.service';
import { Usuario } from './../../../core/models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent implements OnInit {
  
  public registroForm: FormGroup;
  public errorMessage: string = '';
  public showError: boolean;

  constructor(private _usuarioService: UsuarioService, private _passConfValidador: ConfirmacionPasswordService) { }

  ngOnInit(): void {

    this.registroForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('')
    });

    this.registroForm.get('confirm').setValidators([Validators.required,
      this._passConfValidador.validacionConfirmacionPassword(this.registroForm.get('password'))]);

  }

  public validateControl = (controlName: string) => {
    return this.registroForm.controls[controlName].invalid && this.registroForm.controls[controlName].touched
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.registroForm.controls[controlName].hasError(errorName)
  }
  public registroUsuario = (registroFormValue : any) => {
    this.showError = false;
    const formValues = { ...registroFormValue };

    let usuario = new Usuario();
    usuario.email = formValues.email;
    usuario.password = formValues.password;
    usuario.confirmPassword = formValues.confirm;
    
    this._usuarioService.registro(usuario)
    .subscribe(_ => {
      console.log("Successful registration");
    },
    error => {
      this.errorMessage = error;
      this.showError = true;
    })
  }
}