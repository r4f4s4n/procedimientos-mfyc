import { AutenticacionComponent } from './modules/autenticacion/autenticacion.component';
import { LoginGuard } from './core/guards/login-guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './modules/video/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'login',
    component: AutenticacionComponent
  },
  {
    path: '',
    component: InicioComponent,
    canActivate:[LoginGuard]
  },
  {
    path: 'inicio',
    component: InicioComponent,
    canActivate:[LoginGuard]
  },
  /*{ 
    path: '404', 
    component : NotFoundComponent
  },
  {
    path: '',
    redirectTo: '/home', 
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/404', 
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
