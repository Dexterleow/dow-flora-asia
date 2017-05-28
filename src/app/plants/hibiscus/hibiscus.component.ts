import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-hibiscus',
  templateUrl: './hibiscus.component.html',
  styleUrls: ['./hibiscus.component.css']
})
export class HibiscusComponent implements OnInit {

  hibiscusPhotoUrl_1: string;
  hibiscusPhotoUrl_2: string;
  hibiscusPhotoUrl_3: string;
  hibiscusPhotoUrl_4: string;
  hibiscusPhotoUrl_5: string;


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
        this.hibiscusPhotoUrl_1 = this.plantsPhotoResult[149][2];
        this.hibiscusPhotoUrl_2 = this.plantsPhotoResult[150][2];
        this.hibiscusPhotoUrl_3 = this.plantsPhotoResult[151][2];
        this.hibiscusPhotoUrl_4 = this.plantsPhotoResult[152][2];
        this.hibiscusPhotoUrl_5 = this.plantsPhotoResult[153][2];

        console.log(this.hibiscusPhotoUrl_1);
        console.log('hibiscus photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }
}
