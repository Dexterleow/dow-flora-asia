import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-cactus',
  templateUrl: './cactus.component.html',
  styleUrls: ['./cactus.component.css']
})
export class CactusComponent implements OnInit {

  cactusPhotoUrl_1: string;
  cactusPhotoUrl_2: string;
  cactusPhotoUrl_3: string;
  cactusPhotoUrl_4: string;

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
        this.cactusPhotoUrl_1 = this.plantsPhotoResult[60][2];
        this.cactusPhotoUrl_2 = this.plantsPhotoResult[61][2];
        this.cactusPhotoUrl_3 = this.plantsPhotoResult[62][2];
        this.cactusPhotoUrl_4 = this.plantsPhotoResult[63][2];

        console.log(this.cactusPhotoUrl_1);
        console.log('cactus photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
