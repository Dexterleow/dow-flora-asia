import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../shared/services/google-sheets.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  plantsPhotoEndPoint: string;
  plantsPhotoResult: Array<string>;
  carouselArrayLength: number;

  constructor(private googleSheetsService: GoogleSheetsService) {
    this.getImagesFromSheets(this.plantsPhotoEndPoint);
  }

  ngOnInit() {
    this.plantsPhotoEndPoint = '/home/carousel-photo';

    this.plantsPhotoResult = [];

    // if (localStorage.getItem('carousel-photo') === null) {
    //   this.getImagesFromSheets(this.plantsPhotoEndPoint);
    // } else {
    //   // stored value in local storage is a string
    //   // covert back to array to read data
    //   this.plantsPhotoResult = JSON.parse(localStorage.getItem('carousel-photo'));
    //   console.log(this.plantsPhotoResult);
    // }

  }

  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(
      dataFromAPI => {
        this.plantsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.carouselArrayLength = this.plantsPhotoResult.length;
        console.log(this.plantsPhotoResult);
        localStorage.setItem('carousel-photo-home', JSON.stringify(this.plantsPhotoResult));
      });
  }
}