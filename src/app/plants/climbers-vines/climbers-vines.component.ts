import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-climbers-vines',
  templateUrl: './climbers-vines.component.html',
  styleUrls: ['./climbers-vines.component.css']
})
export class ClimbersVinesComponent implements OnInit {

  climbers_vinesPhotoUrl_1: string;
  climbers_vinesPhotoUrl_2: string;
  climbers_vinesPhotoUrl_3: string;
  climbers_vinesPhotoUrl_4: string;
  climbers_vinesPhotoUrl_5: string;
  climbers_vinesPhotoUrl_6: string;
  climbers_vinesPhotoUrl_7: string;


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
        this.climbers_vinesPhotoUrl_1 = this.plantsPhotoResult[77][2];
        this.climbers_vinesPhotoUrl_2 = this.plantsPhotoResult[78][2];
        this.climbers_vinesPhotoUrl_3 = this.plantsPhotoResult[79][2];
        this.climbers_vinesPhotoUrl_4 = this.plantsPhotoResult[80][2];
        this.climbers_vinesPhotoUrl_5 = this.plantsPhotoResult[81][2];
        this.climbers_vinesPhotoUrl_6 = this.plantsPhotoResult[82][2];
        this.climbers_vinesPhotoUrl_7 = this.plantsPhotoResult[83][2];


        console.log(this.climbers_vinesPhotoUrl_1);
        console.log('climbers_vines photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }
}
