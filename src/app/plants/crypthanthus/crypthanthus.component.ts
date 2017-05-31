import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-crypthanthus',
  templateUrl: './crypthanthus.component.html',
  styleUrls: ['./crypthanthus.component.scss']
})
export class CrypthanthusComponent implements OnInit {

  crypthanthusPhotoUrl_1: string;
  crypthanthusPhotoUrl_2: string;
  crypthanthusPhotoUrl_3: string;
  crypthanthusPhotoUrl_4: string;

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
        this.crypthanthusPhotoUrl_1 = this.plantsPhotoResult[99][2];
        this.crypthanthusPhotoUrl_2 = this.plantsPhotoResult[100][2];
        this.crypthanthusPhotoUrl_3 = this.plantsPhotoResult[101][2];
        this.crypthanthusPhotoUrl_4 = this.plantsPhotoResult[102][2];


        console.log(this.crypthanthusPhotoUrl_1);
        console.log('crypthanthus photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
