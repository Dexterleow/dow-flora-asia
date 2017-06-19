import { Component, OnInit } from '@angular/core';
import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-agave',
  templateUrl: './agave.component.html',
  styleUrls: ['./agave.component.scss']
})
export class AgaveComponent implements OnInit {

  plantsPhotoEndPoint: string;
  plantsPhotoEndPoint2: string;

  portraitPlantsPhotoResult: Array<string>;
  landscapePlantsPhotoResult: Array<string>;

  portraitAgaveArrayLength: number;
  landscapeAgaveArrayLength: number;

  constructor(private googleSheetsService: GoogleSheetsService,
              private googleSheetsService2: GoogleSheetsService
  ) {
  }

  ngOnInit() {
    this.plantsPhotoEndPoint = '/home/plants__agave-portrait';
    this.plantsPhotoEndPoint2 = '/home/plants__agave-landscape';

    this.portraitPlantsPhotoResult = [];
    this.landscapePlantsPhotoResult = [];

    if (localStorage.getItem('plants__agave-portrait') === null) {
      this.getImagesFromSheets(this.plantsPhotoEndPoint);
    } else {
      // stored value in local storage is a string
      // covert back to array to read data
      this.portraitPlantsPhotoResult = JSON.parse(localStorage.getItem('plants__agave-portrait'));
    }

    if (localStorage.getItem('plants__agave-landscape') === null) {
      this.getImagesFromSheets2(this.plantsPhotoEndPoint2);
    } else {
      // stored value in local storage is a string
      // covert back to array to read data
      this.landscapePlantsPhotoResult = JSON.parse(localStorage.getItem('plants__agave-landscape'));
    }
  }

  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(
      dataFromAPI => {
        this.portraitPlantsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.portraitAgaveArrayLength = this.portraitPlantsPhotoResult.length;
        console.log(this.portraitPlantsPhotoResult);
        localStorage.setItem('plants__agave-portrait', JSON.stringify(this.portraitPlantsPhotoResult));

        console.log(this.portraitPlantsPhotoResult);
      });
  }

  getImagesFromSheets2(sheetName) {
    this.googleSheetsService2.getImages(sheetName)
      .subscribe(
      dataFromAPI2 => {
        this.landscapePlantsPhotoResult = dataFromAPI2.apiLandingResult[0];
        this.landscapeAgaveArrayLength = this.landscapePlantsPhotoResult.length;
        console.log(this.landscapePlantsPhotoResult);
        localStorage.setItem('plants__agave-landscape', JSON.stringify(this.landscapePlantsPhotoResult));

        console.log(this.landscapePlantsPhotoResult);
      });
  }
}
