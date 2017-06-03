import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-costus',
  templateUrl: './costus.component.html',
  styleUrls: ['./costus.component.scss']
})
export class CostusComponent implements OnInit {

  costusPhotoUrl_1: string;
  costusPhotoUrl_2: string;
  costusPhotoUrl_3: string;
  costusPhotoUrl_4: string;
  costusPhotoUrl_5: string;

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
        this.costusPhotoUrl_1 = this.plantsPhotoResult[89][2];
        this.costusPhotoUrl_2 = this.plantsPhotoResult[90][2];
        this.costusPhotoUrl_3 = this.plantsPhotoResult[91][2];
        this.costusPhotoUrl_4 = this.plantsPhotoResult[92][2];
        this.costusPhotoUrl_5 = this.plantsPhotoResult[93][2];


        console.log(this.costusPhotoUrl_1);
        console.log('costus photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
