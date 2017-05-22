import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../shared/services/google-sheets.service';

@Component({
  selector: 'app-lingga-island',
  templateUrl: './lingga-island.component.html',
  styleUrls: ['./lingga-island.component.css']
})
export class LinggaIslandComponent implements OnInit {

  linggaIslandPhotoUrl_Mountain1: string;
  linggaIslandPhotoUrl_Beach3: string;
  linggaIslandPhotoUrl_History1: string;
  linggaIslandPhotoUrl_Jetty3: string;

  apilinggaIslandPhotoEndPoint: string;
  apilinggaIslandPhotoResult: Array<string>;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.apilinggaIslandPhotoEndPoint = '/home/lingga';
    this.apilinggaIslandPhotoResult = [];

    this.getImagesFromSheets(this.apilinggaIslandPhotoEndPoint);
  }
  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
    .subscribe(dataFromAPI => {
      this.apilinggaIslandPhotoResult = dataFromAPI.apiLandingResult[0];
      this.linggaIslandPhotoUrl_Mountain1 = this.apilinggaIslandPhotoResult[0][2];
      this.linggaIslandPhotoUrl_Beach3 = this.apilinggaIslandPhotoResult[4][2];
      this.linggaIslandPhotoUrl_Jetty3 = this.apilinggaIslandPhotoResult[6][2];
      this.linggaIslandPhotoUrl_History1 = this.apilinggaIslandPhotoResult[8][2];

      // need to run loop here if decide to set an interval and change cover photo every few seconds

      // localStorage.setItem('sixtySecondsCategoryPhotos', JSON.stringify(this.apiCoverPhotoResult));

      console.log(this.linggaIslandPhotoUrl_Mountain1);
      console.log('lingga photo api call success');
      console.log(this.apilinggaIslandPhotoResult);
    });
  }

}

