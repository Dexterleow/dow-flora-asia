import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.scss']
})
export class FlowersComponent implements OnInit {

  flowersPhotoUrl_1: string;
  flowersPhotoUrl_2: string;
  flowersPhotoUrl_3: string;
  flowersPhotoUrl_4: string;
  flowersPhotoUrl_5: string;
  flowersPhotoUrl_6: string;
  flowersPhotoUrl_7: string;

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
        this.flowersPhotoUrl_1 = this.plantsPhotoResult[117][2];
        this.flowersPhotoUrl_2 = this.plantsPhotoResult[118][2];
        this.flowersPhotoUrl_3 = this.plantsPhotoResult[119][2];
        this.flowersPhotoUrl_4 = this.plantsPhotoResult[120][2];
        this.flowersPhotoUrl_5 = this.plantsPhotoResult[121][2];
        this.flowersPhotoUrl_6 = this.plantsPhotoResult[122][2];
        this.flowersPhotoUrl_7 = this.plantsPhotoResult[123][2];


        console.log(this.flowersPhotoUrl_1);
        console.log('flowers photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }


}
