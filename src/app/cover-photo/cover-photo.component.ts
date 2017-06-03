import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../shared/services/google-sheets.service';

@Component({
  selector: 'app-cover-photo',
  templateUrl: './cover-photo.component.html',
  styleUrls: ['./cover-photo.component.scss']
})
export class CoverPhotoComponent implements OnInit {
  
  coverPhotoUrl: string;
  apiCoverPhotoEndPoint: string;
  apiCoverPhotoResult: Array<string>;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.apiCoverPhotoEndPoint = '/home/cover-photo';
    this.apiCoverPhotoResult = [];

    this.getImagesFromSheets(this.apiCoverPhotoEndPoint);
  }
  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
    .subscribe(dataFromAPI => {
      this.apiCoverPhotoResult = dataFromAPI.apiLandingResult[0];
      this.coverPhotoUrl = this.apiCoverPhotoResult[0][3];

      // need to run loop here if decide to set an interval and change cover photo every few seconds

      // localStorage.setItem('sixtySecondsCategoryPhotos', JSON.stringify(this.apiCoverPhotoResult));

      console.log(this.coverPhotoUrl);
      console.log('cover photo api call success');
      console.log(this.apiCoverPhotoResult);
    });
  }
}
