import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-adenium',
  templateUrl: './adenium.component.html',
  styleUrls: ['./adenium.component.scss']
})
export class AdeniumComponent implements OnInit {

  adeniumPhotoUrl_1: string;
  adeniumPhotoUrl_2: string;
  adeniumPhotoUrl_3: string;
  adeniumPhotoUrl_4: string;
  adeniumPhotoUrl_5: string;

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
        this.adeniumPhotoUrl_1 = this.plantsPhotoResult[0][2];
        this.adeniumPhotoUrl_2 = this.plantsPhotoResult[1][2];
        this.adeniumPhotoUrl_3 = this.plantsPhotoResult[2][2];
        this.adeniumPhotoUrl_4 = this.plantsPhotoResult[3][2];
        this.adeniumPhotoUrl_5 = this.plantsPhotoResult[4][2];

        console.log(this.adeniumPhotoUrl_1);
        console.log('adenium photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
