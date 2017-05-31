import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-caladium',
  templateUrl: './caladium.component.html',
  styleUrls: ['./caladium.component.scss']
})
export class CaladiumComponent implements OnInit {

  caladiumPhotoUrl_1: string;
  caladiumPhotoUrl_2: string;
  caladiumPhotoUrl_3: string;
  caladiumPhotoUrl_4: string;
  caladiumPhotoUrl_5: string;

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
        this.caladiumPhotoUrl_1 = this.plantsPhotoResult[64][2];
        this.caladiumPhotoUrl_2 = this.plantsPhotoResult[65][2];
        this.caladiumPhotoUrl_3 = this.plantsPhotoResult[66][2];
        this.caladiumPhotoUrl_4 = this.plantsPhotoResult[67][2];
        this.caladiumPhotoUrl_5 = this.plantsPhotoResult[68][2];

        console.log(this.caladiumPhotoUrl_1);
        console.log('caladium photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }


}
