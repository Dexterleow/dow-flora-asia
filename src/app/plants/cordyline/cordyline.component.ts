import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-cordyline',
  templateUrl: './cordyline.component.html',
  styleUrls: ['./cordyline.component.scss']
})
export class CordylineComponent implements OnInit {

  cordylinePhotoUrl_1: string;
  cordylinePhotoUrl_2: string;
  cordylinePhotoUrl_3: string;
  cordylinePhotoUrl_4: string;
  cordylinePhotoUrl_5: string;

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
        this.cordylinePhotoUrl_1 = this.plantsPhotoResult[84][2];
        this.cordylinePhotoUrl_2 = this.plantsPhotoResult[85][2];
        this.cordylinePhotoUrl_3 = this.plantsPhotoResult[86][2];
        this.cordylinePhotoUrl_4 = this.plantsPhotoResult[87][2];
        this.cordylinePhotoUrl_5 = this.plantsPhotoResult[88][2];


        console.log(this.cordylinePhotoUrl_1);
        console.log('cordyline photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
