import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-bougainvilleas',
  templateUrl: './bougainvilleas.component.html',
  styleUrls: ['./bougainvilleas.component.css']
})
export class BougainvilleasComponent implements OnInit {

  bougainvilleasPhotoUrl_1: string;
  bougainvilleasPhotoUrl_2: string;
  bougainvilleasPhotoUrl_3: string;
  bougainvilleasPhotoUrl_4: string;
  bougainvilleasPhotoUrl_5: string;
  bougainvilleasPhotoUrl_6: string;
  bougainvilleasPhotoUrl_7: string;
  bougainvilleasPhotoUrl_8: string;
  bougainvilleasPhotoUrl_9: string;
  bougainvilleasPhotoUrl_10: string;
  bougainvilleasPhotoUrl_11: string;
  bougainvilleasPhotoUrl_12: string;
  bougainvilleasPhotoUrl_13: string;
  bougainvilleasPhotoUrl_14: string;

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
        this.bougainvilleasPhotoUrl_1 = this.plantsPhotoResult[41][2];
        this.bougainvilleasPhotoUrl_2 = this.plantsPhotoResult[42][2];
        this.bougainvilleasPhotoUrl_3 = this.plantsPhotoResult[43][2];
        this.bougainvilleasPhotoUrl_4 = this.plantsPhotoResult[44][2];
        this.bougainvilleasPhotoUrl_5 = this.plantsPhotoResult[45][2];
        this.bougainvilleasPhotoUrl_6 = this.plantsPhotoResult[46][2];
        this.bougainvilleasPhotoUrl_7 = this.plantsPhotoResult[47][2];
        this.bougainvilleasPhotoUrl_8 = this.plantsPhotoResult[48][2];
        this.bougainvilleasPhotoUrl_9 = this.plantsPhotoResult[49][2];
        this.bougainvilleasPhotoUrl_10 = this.plantsPhotoResult[50][2];
        this.bougainvilleasPhotoUrl_11 = this.plantsPhotoResult[51][2];
        this.bougainvilleasPhotoUrl_12 = this.plantsPhotoResult[52][2];
        this.bougainvilleasPhotoUrl_13 = this.plantsPhotoResult[53][2];
        this.bougainvilleasPhotoUrl_14 = this.plantsPhotoResult[54][2];


        console.log(this.bougainvilleasPhotoUrl_1);
        console.log('bougainvilleas photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
