import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-shrubs',
  templateUrl: './shrubs.component.html',
  styleUrls: ['./shrubs.component.css']
})
export class ShrubsComponent implements OnInit {

  shrubsPhotoUrl_1: string;
  shrubsPhotoUrl_2: string;
  shrubsPhotoUrl_3: string;
  shrubsPhotoUrl_4: string;
  shrubsPhotoUrl_5: string;
  shrubsPhotoUrl_6: string;
  shrubsPhotoUrl_7: string;
  shrubsPhotoUrl_8: string;
  shrubsPhotoUrl_9: string;
  shrubsPhotoUrl_10: string;
  shrubsPhotoUrl_11: string;
  shrubsPhotoUrl_12: string;
  shrubsPhotoUrl_13: string;

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
        this.shrubsPhotoUrl_1 = this.plantsPhotoResult[182][2];
        this.shrubsPhotoUrl_2 = this.plantsPhotoResult[183][2];
        this.shrubsPhotoUrl_3 = this.plantsPhotoResult[184][2];
        this.shrubsPhotoUrl_4 = this.plantsPhotoResult[185][2];
        this.shrubsPhotoUrl_5 = this.plantsPhotoResult[186][2];
        this.shrubsPhotoUrl_6 = this.plantsPhotoResult[187][2];
        this.shrubsPhotoUrl_7 = this.plantsPhotoResult[188][2];
        this.shrubsPhotoUrl_8 = this.plantsPhotoResult[189][2];
        this.shrubsPhotoUrl_9 = this.plantsPhotoResult[190][2];
        this.shrubsPhotoUrl_10 = this.plantsPhotoResult[191][2];
        this.shrubsPhotoUrl_11 = this.plantsPhotoResult[192][2];
        this.shrubsPhotoUrl_12 = this.plantsPhotoResult[193][2];
        this.shrubsPhotoUrl_13 = this.plantsPhotoResult[194][2];

        console.log(this.shrubsPhotoUrl_1);
        console.log('shrubs photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
