import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../../../core/models/video';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
   @Input() sliderConfig: any;
   @Input() videos: Video[];
   @Input() title: string;
   movieClass: string[] = [];
   gifClass: string[] = [];
   slickGif: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onMouseOut(m: Video) {
    m.urlGif = m.urlGif+"?a="+Math.random();;
  }

}
