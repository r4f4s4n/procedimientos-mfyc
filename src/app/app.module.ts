import { InicioComponent } from './modules/video/inicio/inicio.component';
import { RegistroUsuarioComponent } from './modules/autenticacion/registro-usuario/registro-usuario.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorHandlerService } from './shared/services/error-handler.service';
import { LoginComponent } from './modules/autenticacion/login/login.component';
import { AutenticacionComponent } from './modules/autenticacion/autenticacion.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    RegistroUsuarioComponent,
    InicioComponent,
    LoginComponent,
    AutenticacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    SlickCarouselModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerService,
      multi: true
    }
  ],
  bootstrap: [AppComponent ]
})
export class AppModule { }
