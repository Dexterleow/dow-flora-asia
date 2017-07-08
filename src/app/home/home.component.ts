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
  }

  ngOnInit() {
    this.plantsPhotoEndPoint = '/home/carousel-photo';

    this.plantsPhotoResult = [];

    if (localStorage.getItem('home-carousel-photo') == null) {
      this.getImagesFromSheets(this.plantsPhotoEndPoint);
    } else {
      // stored value in local storage is a string
      // covert back to array to read data
      this.apiCoverPhotoEndPoint = JSON.parse(localStorage.getItem('home-carousel-photo'));
      console.log(this.apiCoverPhotoEndPoint);
    }
  }

  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(
        dataFromAPI => {
        this.plantsPhotoResult = dataFromAPI.apiLandingResult[0];
        localStorage.setItem('home-carousel-photo', JSON.stringify(this.plantsPhotoResult));
      });
  }
}
