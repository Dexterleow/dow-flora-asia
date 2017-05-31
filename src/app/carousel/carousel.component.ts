import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [{ provide: CarouselConfig, useValue: { interval: 15000, noPause: false } }]
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
