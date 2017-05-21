import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../shared/services/google-sheets.service';

@Component({
  selector: 'app-lingga-island',
  templateUrl: './lingga-island.component.html',
  styleUrls: ['./lingga-island.component.css']
})
export class LinggaIslandComponent implements OnInit {

  linggaIslandPhotoUrl: string;
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
      this.linggaIslandPhotoUrl = this.apilinggaIslandPhotoResult[1][3];

      // need to run loop here if decide to set an interval and change cover photo every few seconds

      // localStorage.setItem('sixtySecondsCategoryPhotos', JSON.stringify(this.apiCoverPhotoResult));

      console.log(this.linggaIslandPhotoUrl);
      console.log('lingga photo api call success');
      console.log(this.apilinggaIslandPhotoResult);
    });
  }

}

