import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../shared/services/google-sheets.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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

      console.log(this.coverPhotoUrl);
      console.log('cover photo api call success');
      console.log(this.apiCoverPhotoResult);
    });
  }
}
