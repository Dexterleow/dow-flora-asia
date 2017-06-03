import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-agave',
  templateUrl: './agave.component.html',
  styleUrls: ['./agave.component.scss']
})
export class AgaveComponent implements OnInit {

  agavePhotoUrl_1: string;
  agavePhotoUrl_2: string;
  agavePhotoUrl_3: string;
  agavePhotoUrl_4: string;
  agavePhotoUrl_5: string;
  agavePhotoUrl_6: string;

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
        this.agavePhotoUrl_1 = this.plantsPhotoResult[5][2];
        this.agavePhotoUrl_2 = this.plantsPhotoResult[6][2];
        this.agavePhotoUrl_3 = this.plantsPhotoResult[7][2];
        this.agavePhotoUrl_4 = this.plantsPhotoResult[8][2];
        this.agavePhotoUrl_5 = this.plantsPhotoResult[9][2];
        this.agavePhotoUrl_6 = this.plantsPhotoResult[10][2];

        console.log(this.agavePhotoUrl_1);
        console.log('agave photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
