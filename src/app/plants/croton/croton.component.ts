import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-croton',
  templateUrl: './croton.component.html',
  styleUrls: ['./croton.component.css']
})
export class CrotonComponent implements OnInit {

  crotonPhotoUrl_1: string;
  crotonPhotoUrl_2: string;
  crotonPhotoUrl_3: string;
  crotonPhotoUrl_4: string;
  crotonPhotoUrl_5: string;

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
        this.crotonPhotoUrl_1 = this.plantsPhotoResult[94][2];
        this.crotonPhotoUrl_2 = this.plantsPhotoResult[95][2];
        this.crotonPhotoUrl_3 = this.plantsPhotoResult[96][2];
        this.crotonPhotoUrl_4 = this.plantsPhotoResult[97][2];
        this.crotonPhotoUrl_5 = this.plantsPhotoResult[98][2];


        console.log(this.crotonPhotoUrl_1);
        console.log('croton photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }


}
