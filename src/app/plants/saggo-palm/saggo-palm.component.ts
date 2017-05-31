import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-saggo-palm',
  templateUrl: './saggo-palm.component.html',
  styleUrls: ['./saggo-palm.component.scss']
})
export class SaggoPalmComponent implements OnInit {

  saggo_palmPhotoUrl_1: string;
  saggo_palmPhotoUrl_2: string;

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
        this.saggo_palmPhotoUrl_1 = this.plantsPhotoResult[164][2];
        this.saggo_palmPhotoUrl_2 = this.plantsPhotoResult[165][2];

        console.log(this.saggo_palmPhotoUrl_1);
        console.log('saggo_palm photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
