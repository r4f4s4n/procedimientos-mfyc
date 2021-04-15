import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from 'src/app/core/models/video';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { VideoService } from 'src/app/core/services/video.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, OnDestroy {

  sticky = false;
  trending: Video[];
  vendajes: Video[];
  ecografias: Video[];

  sliderConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false
  };

  @ViewChild('stickHeader') header: ElementRef;
  headerBGUrl: string;

  constructor(private videoService: VideoService, private usuarioService: UsuarioService, private _router: Router) {
  }

  ngOnInit(): void {
    
    this.videoService.getAll().subscribe(data => {
      this.trending = data;
      //this.headerBGUrl = this.trending[0].urlImagen;
      this.headerBGUrl = "https://www.ecestaticos.com/imagestatic/clipping/935/e38/935e3840101e7d4570d47d8527b4c21a/el-12-de-octubre-analizara-el-impacto-sobre-la-evolucion-del-virus-en-pacientes-de-covid.jpg";
    })

    this.videoService.getByCategoria("0").subscribe(data => {
      this.vendajes = data;
    })
    
    this.videoService.getByCategoria("1").subscribe(data => {
      this.ecografias = data;
    })

  }

  public logout = () => {
    this.usuarioService.logout();
    console.log("Ususario fuera");
    this._router.navigate(["/login"]);
  }

  ngOnDestroy(): void {

  }

  @HostListener('window:scroll', ['$event'])
  // tslint:disable-next-line:typedef
  handleScroll() {
    const windowScroll = window.pageYOffset;

    if (windowScroll >= this.header.nativeElement.offsetHeight) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

}
