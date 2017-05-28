import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-strelizia',
  templateUrl: './strelizia.component.html',
  styleUrls: ['./strelizia.component.css']
})
export class StreliziaComponent implements OnInit {

  streliziaPhotoUrl_1: string;

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
        this.streliziaPhotoUrl_1 = this.plantsPhotoResult[195][2];

        console.log(this.streliziaPhotoUrl_1);
        console.log('strelizia photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
