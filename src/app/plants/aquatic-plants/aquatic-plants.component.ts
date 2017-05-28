import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-aquatic-plants',
  templateUrl: './aquatic-plants.component.html',
  styleUrls: ['./aquatic-plants.component.css']
})
export class AquaticPlantsComponent implements OnInit {

  aquatic_plantsPhotoUrl_1: string;
  aquatic_plantsPhotoUrl_2: string;
  aquatic_plantsPhotoUrl_3: string;
  aquatic_plantsPhotoUrl_4: string;
  aquatic_plantsPhotoUrl_5: string;

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
        this.aquatic_plantsPhotoUrl_1 = this.plantsPhotoResult[29][2];
        this.aquatic_plantsPhotoUrl_2 = this.plantsPhotoResult[30][2];
        this.aquatic_plantsPhotoUrl_3 = this.plantsPhotoResult[31][2];
        this.aquatic_plantsPhotoUrl_4 = this.plantsPhotoResult[32][2];
        this.aquatic_plantsPhotoUrl_5 = this.plantsPhotoResult[33][2];


        console.log(this.aquatic_plantsPhotoUrl_1);
        console.log('aquatic_plants photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
