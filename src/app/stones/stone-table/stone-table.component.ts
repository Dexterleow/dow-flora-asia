import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-stone-table',
  templateUrl: './stone-table.component.html',
  styleUrls: ['./stone-table.component.css']
})
export class StoneTableComponent implements OnInit {

  stone_tablePhotoUrl_1: string;
  stone_tablePhotoUrl_2: string;
  stone_tablePhotoUrl_3: string;
  stone_tablePhotoUrl_4: string;
  stone_tablePhotoUrl_5: string;
  stone_tablePhotoUrl_6: string;

  plantsPhotoEndPoint: string;
  plantsPhotoResult: Array<string>;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.plantsPhotoEndPoint = '/home/stones';
    this.plantsPhotoResult = [];

    this.getImagesFromSheets(this.plantsPhotoEndPoint);
  }
  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(dataFromAPI => {
        this.plantsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.stone_tablePhotoUrl_1 = this.plantsPhotoResult[0][2];
        this.stone_tablePhotoUrl_2 = this.plantsPhotoResult[1][2];
        this.stone_tablePhotoUrl_3 = this.plantsPhotoResult[2][2];
        this.stone_tablePhotoUrl_4 = this.plantsPhotoResult[3][2];
        this.stone_tablePhotoUrl_5 = this.plantsPhotoResult[4][2];
        this.stone_tablePhotoUrl_6 = this.plantsPhotoResult[5][2];

        console.log(this.stone_tablePhotoUrl_1);
        console.log('stone_table photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }


}
