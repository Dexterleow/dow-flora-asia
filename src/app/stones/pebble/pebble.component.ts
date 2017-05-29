import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-pebble',
  templateUrl: './pebble.component.html',
  styleUrls: ['./pebble.component.css']
})
export class PebbleComponent implements OnInit {

  pebblePhotoUrl_1: string;

  plantsPhotoEndPoint: string;
  plantsPhotoResult: Array<string>;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.plantsPhotoEndPoint = '/home/stones';
    this.plantsPhotoResult = [];

    this.getImagesFromSheets(this.plantsPhotoEndPoint);
  }
  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(dataFromAPI => {
        this.plantsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.pebblePhotoUrl_1 = this.plantsPhotoResult[6][2];

        console.log(this.pebblePhotoUrl_1);
        console.log('pebble photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }
}
