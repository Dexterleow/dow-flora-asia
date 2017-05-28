import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-herbs',
  templateUrl: './herbs.component.html',
  styleUrls: ['./herbs.component.css']
})
export class HerbsComponent implements OnInit {

  herbsPhotoUrl_1: string;
  herbsPhotoUrl_2: string;
  herbsPhotoUrl_3: string;
  herbsPhotoUrl_4: string;
  herbsPhotoUrl_5: string;


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
        this.herbsPhotoUrl_1 = this.plantsPhotoResult[144][2];
        this.herbsPhotoUrl_2 = this.plantsPhotoResult[145][2];
        this.herbsPhotoUrl_3 = this.plantsPhotoResult[146][2];
        this.herbsPhotoUrl_4 = this.plantsPhotoResult[147][2];
        this.herbsPhotoUrl_5 = this.plantsPhotoResult[148][2];

        console.log(this.herbsPhotoUrl_1);
        console.log('herbs photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
