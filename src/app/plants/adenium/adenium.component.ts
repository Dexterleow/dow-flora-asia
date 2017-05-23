import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-adenium',
  templateUrl: './adenium.component.html',
  styleUrls: ['./adenium.component.css']
})
export class AdeniumComponent implements OnInit {

  adeniumPhotoUrl_1: string;
  adeniumPhotoUrl_2: string;
  adeniumPhotoUrl_3: string;
  adeniumPhotoUrl_4: string;
  adeniumPhotoUrl_5: string;


  apilinggaIslandPhotoEndPoint: string;
  apilinggaIslandPhotoResult: Array<string>;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.apilinggaIslandPhotoEndPoint = '/home/plants';
    this.apilinggaIslandPhotoResult = [];

    this.getImagesFromSheets(this.apilinggaIslandPhotoEndPoint);
  }
  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(dataFromAPI => {
        this.apilinggaIslandPhotoResult = dataFromAPI.apiLandingResult[0];
        this.adeniumPhotoUrl_1 = this.apilinggaIslandPhotoResult[0][2];
        this.adeniumPhotoUrl_2 = this.apilinggaIslandPhotoResult[1][2];
        this.adeniumPhotoUrl_3 = this.apilinggaIslandPhotoResult[2][2];
        this.adeniumPhotoUrl_4 = this.apilinggaIslandPhotoResult[3][2];
        this.adeniumPhotoUrl_5 = this.apilinggaIslandPhotoResult[4][2];

        console.log(this.adeniumPhotoUrl_1);
        console.log('adenium photo api call success');
        console.log(this.apilinggaIslandPhotoResult);
      });
  }

}
