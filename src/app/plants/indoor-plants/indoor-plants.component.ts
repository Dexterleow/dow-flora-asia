import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-indoor-plants',
  templateUrl: './indoor-plants.component.html',
  styleUrls: ['./indoor-plants.component.css']
})
export class IndoorPlantsComponent implements OnInit {

  indoor_plantsPhotoUrl_1: string;
  indoor_plantsPhotoUrl_2: string;
  indoor_plantsPhotoUrl_3: string;
  indoor_plantsPhotoUrl_4: string;
  indoor_plantsPhotoUrl_5: string;


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
        this.indoor_plantsPhotoUrl_1 = this.plantsPhotoResult[154][2];
        this.indoor_plantsPhotoUrl_2 = this.plantsPhotoResult[155][2];
        this.indoor_plantsPhotoUrl_3 = this.plantsPhotoResult[156][2];
        this.indoor_plantsPhotoUrl_4 = this.plantsPhotoResult[157][2];
        this.indoor_plantsPhotoUrl_5 = this.plantsPhotoResult[158][2];

        console.log(this.indoor_plantsPhotoUrl_1);
        console.log('indoor_plants photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
