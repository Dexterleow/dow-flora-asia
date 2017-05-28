import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-plumerias',
  templateUrl: './plumerias.component.html',
  styleUrls: ['./plumerias.component.css']
})
export class PlumeriasComponent implements OnInit {

  plumeriasPhotoUrl_1: string;
  plumeriasPhotoUrl_2: string;
  plumeriasPhotoUrl_3: string;
  plumeriasPhotoUrl_4: string;
  plumeriasPhotoUrl_5: string;

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
        this.plumeriasPhotoUrl_1 = this.plantsPhotoResult[177][2];
        this.plumeriasPhotoUrl_2 = this.plantsPhotoResult[178][2];
        this.plumeriasPhotoUrl_3 = this.plantsPhotoResult[179][2];
        this.plumeriasPhotoUrl_4 = this.plantsPhotoResult[180][2];
        this.plumeriasPhotoUrl_5 = this.plantsPhotoResult[181][2];

        console.log(this.plumeriasPhotoUrl_1);
        console.log('plumerias photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }
}
