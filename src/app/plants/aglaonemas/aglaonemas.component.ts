import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-aglaonemas',
  templateUrl: './aglaonemas.component.html',
  styleUrls: ['./aglaonemas.component.css']
})
export class AglaonemasComponent implements OnInit {

  aglaonemasPhotoUrl_1: string;
  aglaonemasPhotoUrl_2: string;
  aglaonemasPhotoUrl_3: string;
  aglaonemasPhotoUrl_4: string;
  aglaonemasPhotoUrl_5: string;
  aglaonemasPhotoUrl_6: string;
  aglaonemasPhotoUrl_7: string;
  aglaonemasPhotoUrl_8: string;
  aglaonemasPhotoUrl_9: string;

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
        this.aglaonemasPhotoUrl_1 = this.plantsPhotoResult[11][2];
        this.aglaonemasPhotoUrl_2 = this.plantsPhotoResult[12][2];
        this.aglaonemasPhotoUrl_3 = this.plantsPhotoResult[13][2];
        this.aglaonemasPhotoUrl_4 = this.plantsPhotoResult[14][2];
        this.aglaonemasPhotoUrl_5 = this.plantsPhotoResult[15][2];
        this.aglaonemasPhotoUrl_6 = this.plantsPhotoResult[16][2];
        this.aglaonemasPhotoUrl_7 = this.plantsPhotoResult[17][2];
        this.aglaonemasPhotoUrl_8 = this.plantsPhotoResult[18][2];
        this.aglaonemasPhotoUrl_9 = this.plantsPhotoResult[19][2];

        console.log(this.aglaonemasPhotoUrl_1);
        console.log('aglaonemas photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
