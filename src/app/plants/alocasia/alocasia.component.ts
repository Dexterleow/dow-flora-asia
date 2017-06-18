import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-alocasia',
  templateUrl: './alocasia.component.html',
  styleUrls: ['./alocasia.component.scss']
})
export class AlocasiaComponent implements OnInit {

  alocasiaPhotoUrl_1: string;
  alocasiaPhotoUrl_2: string;
  alocasiaPhotoUrl_3: string;
  alocasiaPhotoUrl_4: string;

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
        this.alocasiaPhotoUrl_1 = this.plantsPhotoResult[20][2];
        this.alocasiaPhotoUrl_2 = this.plantsPhotoResult[21][2];
        this.alocasiaPhotoUrl_3 = this.plantsPhotoResult[22][2];
        this.alocasiaPhotoUrl_4 = this.plantsPhotoResult[23][2];

        console.log(this.alocasiaPhotoUrl_1);
        console.log('alocasia photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }


}
