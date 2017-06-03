import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-hanging-plants',
  templateUrl: './hanging-plants.component.html',
  styleUrls: ['./hanging-plants.component.scss']
})
export class HangingPlantsComponent implements OnInit {

  hanging_plantsPhotoUrl_1: string;
  hanging_plantsPhotoUrl_2: string;
  hanging_plantsPhotoUrl_3: string;
  hanging_plantsPhotoUrl_4: string;
  hanging_plantsPhotoUrl_5: string;


  plantsPhotoEndPoint: string;
  plantsPhotoResult: Array<string>;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.plantsPhotoEndPoint = '/home/plants';
    this.plantsPhotoResult = [];

    this.getImagesFromSheets(this.plantsPhotoEndPoint);
  }
  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(dataFromAPI => {
        this.plantsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.hanging_plantsPhotoUrl_1 = this.plantsPhotoResult[134][2];
        this.hanging_plantsPhotoUrl_2 = this.plantsPhotoResult[135][2];
        this.hanging_plantsPhotoUrl_3 = this.plantsPhotoResult[136][2];
        this.hanging_plantsPhotoUrl_4 = this.plantsPhotoResult[137][2];
        this.hanging_plantsPhotoUrl_5 = this.plantsPhotoResult[138][2];

        console.log(this.hanging_plantsPhotoUrl_1);
        console.log('hanging_plants photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
