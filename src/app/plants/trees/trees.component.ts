import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-trees',
  templateUrl: './trees.component.html',
  styleUrls: ['./trees.component.scss']
})
export class TreesComponent implements OnInit {

  treesPhotoUrl_1: string;
  treesPhotoUrl_2: string;
  treesPhotoUrl_3: string;
  treesPhotoUrl_4: string;
  treesPhotoUrl_5: string;

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
        this.treesPhotoUrl_1 = this.plantsPhotoResult[203][2];
        this.treesPhotoUrl_2 = this.plantsPhotoResult[204][2];
        this.treesPhotoUrl_3 = this.plantsPhotoResult[205][2];
        this.treesPhotoUrl_4 = this.plantsPhotoResult[206][2];
        this.treesPhotoUrl_5 = this.plantsPhotoResult[207][2];

        console.log(this.treesPhotoUrl_1);
        console.log('trees photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
