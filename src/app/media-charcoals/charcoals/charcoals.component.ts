import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-charcoals',
  templateUrl: './charcoals.component.html',
  styleUrls: ['./charcoals.component.css']
})
export class CharcoalsComponent implements OnInit {

  charcoalsPhotoUrl_1: string;
  charcoalsPhotoUrl_2: string;

  charcoalsPhotoEndPoint: string;
  charcoalsPhotoResult: Array<string>;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.charcoalsPhotoEndPoint = '/home/growingMediaAndCharcoals';
    this.charcoalsPhotoResult = [];

    this.getImagesFromSheets(this.charcoalsPhotoEndPoint);
  }
  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(dataFromAPI => {
        this.charcoalsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.charcoalsPhotoUrl_1 = this.charcoalsPhotoResult[1][2];
        this.charcoalsPhotoUrl_2 = this.charcoalsPhotoResult[2][2];

        console.log(this.charcoalsPhotoUrl_1);
        console.log('charcoalsPhotoUrl_1 photo api call success');
        console.log(this.charcoalsPhotoResult);
      });
  }


}
