import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-calatheas',
  templateUrl: './calatheas.component.html',
  styleUrls: ['./calatheas.component.scss']
})
export class CalatheasComponent implements OnInit {

  calatheasPhotoUrl_1: string;
  calatheasPhotoUrl_2: string;
  calatheasPhotoUrl_3: string;
  calatheasPhotoUrl_4: string;
  calatheasPhotoUrl_5: string;
  calatheasPhotoUrl_6: string;
  calatheasPhotoUrl_7: string;
  calatheasPhotoUrl_8: string;

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
        this.calatheasPhotoUrl_1 = this.plantsPhotoResult[69][2];
        this.calatheasPhotoUrl_2 = this.plantsPhotoResult[70][2];
        this.calatheasPhotoUrl_3 = this.plantsPhotoResult[71][2];
        this.calatheasPhotoUrl_4 = this.plantsPhotoResult[72][2];
        this.calatheasPhotoUrl_5 = this.plantsPhotoResult[73][2];
        this.calatheasPhotoUrl_6 = this.plantsPhotoResult[74][2];
        this.calatheasPhotoUrl_7 = this.plantsPhotoResult[75][2];
        this.calatheasPhotoUrl_8 = this.plantsPhotoResult[76][2];

        console.log(this.calatheasPhotoUrl_1);
        console.log('calatheas photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }
}
