import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-ground-covers',
  templateUrl: './ground-covers.component.html',
  styleUrls: ['./ground-covers.component.scss']
})
export class GroundCoversComponent implements OnInit {

  ground_coversPhotoUrl_1: string;
  ground_coversPhotoUrl_2: string;
  ground_coversPhotoUrl_3: string;
  ground_coversPhotoUrl_4: string;
  ground_coversPhotoUrl_5: string;


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
        this.ground_coversPhotoUrl_1 = this.plantsPhotoResult[129][2];
        this.ground_coversPhotoUrl_2 = this.plantsPhotoResult[130][2];
        this.ground_coversPhotoUrl_3 = this.plantsPhotoResult[131][2];
        this.ground_coversPhotoUrl_4 = this.plantsPhotoResult[132][2];
        this.ground_coversPhotoUrl_5 = this.plantsPhotoResult[133][2];

        console.log(this.ground_coversPhotoUrl_1);
        console.log('ground_covers photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
