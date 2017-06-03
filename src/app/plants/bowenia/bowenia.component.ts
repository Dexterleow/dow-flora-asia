import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-bowenia',
  templateUrl: './bowenia.component.html',
  styleUrls: ['./bowenia.component.scss']
})
export class BoweniaComponent implements OnInit {

  boweniaPhotoUrl_1: string;
  boweniaPhotoUrl_2: string;
  boweniaPhotoUrl_3: string;
  boweniaPhotoUrl_4: string;
  boweniaPhotoUrl_5: string;

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
        this.boweniaPhotoUrl_1 = this.plantsPhotoResult[55][2];
        this.boweniaPhotoUrl_2 = this.plantsPhotoResult[56][2];
        this.boweniaPhotoUrl_3 = this.plantsPhotoResult[57][2];
        this.boweniaPhotoUrl_4 = this.plantsPhotoResult[58][2];
        this.boweniaPhotoUrl_5 = this.plantsPhotoResult[59][2];


        console.log(this.boweniaPhotoUrl_1);
        console.log('bowenia photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
