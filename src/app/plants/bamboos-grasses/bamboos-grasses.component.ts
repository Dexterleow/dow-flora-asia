import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';


@Component({
  selector: 'app-bamboos-grasses',
  templateUrl: './bamboos-grasses.component.html',
  styleUrls: ['./bamboos-grasses.component.css']
})
export class BamboosGrassesComponent implements OnInit {

  bamboos_grassesPhotoUrl_1: string;
  bamboos_grassesPhotoUrl_2: string;
  bamboos_grassesPhotoUrl_3: string;
  bamboos_grassesPhotoUrl_4: string;
  bamboos_grassesPhotoUrl_5: string;
  bamboos_grassesPhotoUrl_6: string;
  bamboos_grassesPhotoUrl_7: string;

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
        this.bamboos_grassesPhotoUrl_1 = this.plantsPhotoResult[34][2];
        this.bamboos_grassesPhotoUrl_2 = this.plantsPhotoResult[35][2];
        this.bamboos_grassesPhotoUrl_3 = this.plantsPhotoResult[36][2];
        this.bamboos_grassesPhotoUrl_4 = this.plantsPhotoResult[37][2];
        this.bamboos_grassesPhotoUrl_5 = this.plantsPhotoResult[38][2];
        this.bamboos_grassesPhotoUrl_6 = this.plantsPhotoResult[39][2];
        this.bamboos_grassesPhotoUrl_7 = this.plantsPhotoResult[40][2];


        console.log(this.bamboos_grassesPhotoUrl_1);
        console.log('bamboos_grasses photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
