import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-succulent-plants',
  templateUrl: './succulent-plants.component.html',
  styleUrls: ['./succulent-plants.component.scss']
})
export class SucculentPlantsComponent implements OnInit {

  succulent_plantsPhotoUrl_1: string;
  succulent_plantsPhotoUrl_2: string;
  succulent_plantsPhotoUrl_3: string;
  succulent_plantsPhotoUrl_4: string;
  succulent_plantsPhotoUrl_5: string;
  succulent_plantsPhotoUrl_6: string;
  succulent_plantsPhotoUrl_7: string;

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
        this.succulent_plantsPhotoUrl_1 = this.plantsPhotoResult[196][2];
        this.succulent_plantsPhotoUrl_2 = this.plantsPhotoResult[197][2];
        this.succulent_plantsPhotoUrl_3 = this.plantsPhotoResult[198][2];
        this.succulent_plantsPhotoUrl_4 = this.plantsPhotoResult[199][2];
        this.succulent_plantsPhotoUrl_5 = this.plantsPhotoResult[200][2];
        this.succulent_plantsPhotoUrl_6 = this.plantsPhotoResult[201][2];
        this.succulent_plantsPhotoUrl_7 = this.plantsPhotoResult[202][2];

        console.log(this.succulent_plantsPhotoUrl_1);
        console.log('succulent_plants photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }
}
