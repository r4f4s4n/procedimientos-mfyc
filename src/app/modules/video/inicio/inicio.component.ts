import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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
  material: Video[];

  esPaginaActiva: boolean = false;

  sliderConfig = {
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    autoplay: false
  };

  @ViewChild('stickHeader') header: ElementRef;
  headerBGUrl: string;
  @ViewChild('circularMenu') circularMenu: ElementRef;

  constructor(private videoService: VideoService, private usuarioService: UsuarioService, private _router: Router) {
  }

  ngOnInit(): void {
    
    this.videoService.getAll().subscribe((data: any[]) => {
      this.trending = data;
      //this.headerBGUrl = this.trending[0].urlImagen;
      this.headerBGUrl = "https://www.ecestaticos.com/imagestatic/clipping/935/e38/935e3840101e7d4570d47d8527b4c21a/el-12-de-octubre-analizara-el-impacto-sobre-la-evolucion-del-virus-en-pacientes-de-covid.jpg";
    },)

    this.videoService.getByCategoria("0").subscribe((data: any[]) => {
      this.vendajes = data;
    })
    
    this.videoService.getByCategoria("2").subscribe((data: any[]) => {
      this.material = data;
    })

    this.esPaginaActiva = true;
  }

  public logout = () => {
    this.usuarioService.logout();
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
      console.log(this.circularMenu.nativeElement.classList);
      this.circularMenu.nativeElement.classList.remove('active')
    } else {
      this.sticky = false;
    }
  }

}
