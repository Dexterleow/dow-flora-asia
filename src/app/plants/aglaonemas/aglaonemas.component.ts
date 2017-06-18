import { Component, OnInit } from '@angular/core';
import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-aglaonemas',
  templateUrl: './aglaonemas.component.html',
  styleUrls: ['./aglaonemas.component.scss']
})
export class AglaonemasComponent implements OnInit {

  plantsPhotoEndPoint: string;
  plantsPhotoEndPoint2: string;

  portraitPlantsPhotoResult: Array<string>;
  landscapePlantsPhotoResult: Array<string>;

  portraitAglaonemasArrayLength: number;
  landscapeAglaonemasArrayLength: number;

  constructor(private googleSheetsService: GoogleSheetsService,
              private googleSheetsService2: GoogleSheetsService) {
  }

ngOnInit() {
    this.plantsPhotoEndPoint = '/home/plants__aglaonemas-portrait';
    this.plantsPhotoEndPoint2 = '/home/plants__aglaonemas-landscape';

    this.portraitPlantsPhotoResult = [];
    this.landscapePlantsPhotoResult = [];

    if (localStorage.getItem('plants__aglaonemas-portrait') === null) {
      this.getImagesFromSheets(this.plantsPhotoEndPoint);
    } else {
      // stored value in local storage is a string
      // covert back to array to read data
      this.portraitPlantsPhotoResult = JSON.parse(localStorage.getItem('plants__aglaonemas-portrait'));
    }

    if (localStorage.getItem('plants__aglaonemas-landscape') === null) {
      this.getImagesFromSheets2(this.plantsPhotoEndPoint2);
    } else {
      // stored value in local storage is a string
      // covert back to array to read data
      this.landscapePlantsPhotoResult = JSON.parse(localStorage.getItem('plants__aglaonemas-landscape'));
    }
  }

  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(
      dataFromAPI => {
        this.portraitPlantsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.portraitAglaonemasArrayLength = this.portraitPlantsPhotoResult.length;
        localStorage.setItem('plants__aglaonemas-portrait', JSON.stringify(this.portraitPlantsPhotoResult));

        console.log(this.portraitPlantsPhotoResult);
      });
  }

  getImagesFromSheets2(sheetName) {
    this.googleSheetsService2.getImages(sheetName)
      .subscribe(
      dataFromAPI2 => {
        this.landscapePlantsPhotoResult = dataFromAPI2.apiLandingResult[0];
        this.landscapeAglaonemasArrayLength = this.landscapePlantsPhotoResult.length;
        localStorage.setItem('plants__aglaonemas-landscape', JSON.stringify(this.landscapePlantsPhotoResult));

        console.log(this.landscapePlantsPhotoResult);
      });
  }

}
