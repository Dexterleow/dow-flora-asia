import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-ananas',
  templateUrl: './ananas.component.html',
  styleUrls: ['./ananas.component.css']
})
export class AnanasComponent implements OnInit {

  ananasPhotoUrl_1: string;
  ananasPhotoUrl_2: string;
  ananasPhotoUrl_3: string;
  ananasPhotoUrl_4: string;
  ananasPhotoUrl_5: string;

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
        this.ananasPhotoUrl_1 = this.plantsPhotoResult[24][2];
        this.ananasPhotoUrl_2 = this.plantsPhotoResult[25][2];
        this.ananasPhotoUrl_3 = this.plantsPhotoResult[26][2];
        this.ananasPhotoUrl_4 = this.plantsPhotoResult[27][2];
        this.ananasPhotoUrl_5 = this.plantsPhotoResult[28][2];


        console.log(this.ananasPhotoUrl_1);
        console.log('ananas photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }


}
