import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../../../core/models/video';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
   @Input() sliderConfig;
   @Input() videos: Video[];
   @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
