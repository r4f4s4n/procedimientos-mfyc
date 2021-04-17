import { UsuarioService } from '../../../core/services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/core/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public errorMessage: string = '';
  public showError: boolean;
  esOlvidoPanel: boolean = false;
  esCargando: boolean = false;

  constructor(private _usuarioService: UsuarioService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      emailOlvido: new FormControl("", [Validators.email])
    })

  }

  public validateControl = (controlName: string) => {
    return this.loginForm.controls[controlName].invalid && this.loginForm.controls[controlName].touched
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName)
  }

  public login = async (loginFormValue: any) => {
    this.esCargando = true;
    await this.delay(2000);
    
    this.showError = false;
    const login = {... loginFormValue };

    let usuario = new Usuario();
    usuario.email = login.email;
    usuario.password = login.password;

    this._usuarioService.login(usuario)
    .subscribe(res => {
       localStorage.setItem("token", res.token);
       this._usuarioService.sendAuthStateChangeNotification(res.esOperacionExistosa);
       this._router.navigate(['inicio']);
    },
    (error) => {
      this.esCargando = false;
      this.errorMessage = error;
      this.showError = true;
    })
  }
  
  public olvidoPanel() {
    this.esOlvidoPanel = !this.esOlvidoPanel;
  }

  private delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

}