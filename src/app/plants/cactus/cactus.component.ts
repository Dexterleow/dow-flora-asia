import { Component, OnInit } from '@angular/core';
import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-cactus',
  templateUrl: './cactus.component.html',
  styleUrls: ['./cactus.component.scss']
})
export class CactusComponent implements OnInit {

  plantsPhotoEndPoint: string;
  plantsPhotoEndPoint2: string;

  portraitPlantsPhotoResult: Array<string>;
  landscapePlantsPhotoResult: Array<string>;

  portraitCactusArrayLength: number;
  landscapeCactusArrayLength: number;

  constructor(private googleSheetsService: GoogleSheetsService,
  private googleSheetsService2: GoogleSheetsService
  ) {
  }

  ngOnInit() {
    this.plantsPhotoEndPoint = '/home/plants__cactus-portrait';
    this.plantsPhotoEndPoint2 = '/home/plants__cactus-landscape';

    this.portraitPlantsPhotoResult = [];
    this.landscapePlantsPhotoResult = [];

    if (localStorage.getItem('plants__cactus-portrait') === null) {
      this.getImagesFromSheets(this.plantsPhotoEndPoint);
    } else {
      // stored value in local storage is a string
      // covert back to array to read data
      this.portraitPlantsPhotoResult = JSON.parse(localStorage.getItem('plants__cactus-portrait'));
    }

    if (localStorage.getItem('plants__cactus-landscape') === null) {
      this.getImagesFromSheets2(this.plantsPhotoEndPoint2);
    } else {
      // stored value in local storage is a string
      // covert back to array to read data
      this.landscapePlantsPhotoResult = JSON.parse(localStorage.getItem('plants__cactus-landscape'));
    }
  }

  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(
      dataFromAPI => {
        this.portraitPlantsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.portraitCactusArrayLength = this.portraitPlantsPhotoResult.length;
        localStorage.setItem('plants__cactus-portrait', JSON.stringify(this.portraitPlantsPhotoResult));

        console.log(this.portraitPlantsPhotoResult);
      });
  }

  getImagesFromSheets2(sheetName) {
    this.googleSheetsService2.getImages(sheetName)
      .subscribe(
      dataFromAPI2 => {
        this.landscapePlantsPhotoResult = dataFromAPI2.apiLandingResult[0];
        this.landscapeCactusArrayLength = this.landscapePlantsPhotoResult.length;
        localStorage.setItem('plants__cactus-landscape', JSON.stringify(this.landscapePlantsPhotoResult));

        console.log(this.landscapePlantsPhotoResult);
      });
  }


}
