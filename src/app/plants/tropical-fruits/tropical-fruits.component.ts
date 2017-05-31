import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-tropical-fruits',
  templateUrl: './tropical-fruits.component.html',
  styleUrls: ['./tropical-fruits.component.scss']
})
export class TropicalFruitsComponent implements OnInit {

  tropical_fruitsPhotoUrl_1: string;
  tropical_fruitsPhotoUrl_2: string;
  tropical_fruitsPhotoUrl_3: string;
  tropical_fruitsPhotoUrl_4: string;
  tropical_fruitsPhotoUrl_5: string;
  tropical_fruitsPhotoUrl_6: string;
  tropical_fruitsPhotoUrl_7: string;
  tropical_fruitsPhotoUrl_8: string;
  tropical_fruitsPhotoUrl_9: string;

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
        this.tropical_fruitsPhotoUrl_1 = this.plantsPhotoResult[208][2];
        this.tropical_fruitsPhotoUrl_2 = this.plantsPhotoResult[209][2];
        this.tropical_fruitsPhotoUrl_3 = this.plantsPhotoResult[210][2];
        this.tropical_fruitsPhotoUrl_4 = this.plantsPhotoResult[211][2];
        this.tropical_fruitsPhotoUrl_5 = this.plantsPhotoResult[212][2];
        this.tropical_fruitsPhotoUrl_6 = this.plantsPhotoResult[213][2];
        this.tropical_fruitsPhotoUrl_7 = this.plantsPhotoResult[214][2];
        this.tropical_fruitsPhotoUrl_8 = this.plantsPhotoResult[215][2];
        this.tropical_fruitsPhotoUrl_9 = this.plantsPhotoResult[216][2];

        console.log(this.tropical_fruitsPhotoUrl_1);
        console.log('tropical_fruits photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
