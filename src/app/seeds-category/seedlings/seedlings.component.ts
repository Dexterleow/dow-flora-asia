import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-seedlings',
  templateUrl: './seedlings.component.html',
  styleUrls: ['./seedlings.component.css']
})
export class SeedlingsComponent implements OnInit {

  seedlingsPhotoUrl_1: string;

  seedsPhotoEndPoint: string;
  seedsPhotoResult: Array<string>;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.seedsPhotoEndPoint = '/home/seeds';
    this.seedsPhotoResult = [];

    this.getImagesFromSheets(this.seedsPhotoEndPoint);
  }
  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(dataFromAPI => {
        this.seedsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.seedlingsPhotoUrl_1 = this.seedsPhotoResult[1][2];

        console.log(this.seedlingsPhotoUrl_1);
        console.log('seedlings photo api call success');
        console.log(this.seedsPhotoResult);
      });
  }
}
