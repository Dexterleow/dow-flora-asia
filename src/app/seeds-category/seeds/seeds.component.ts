import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-seeds',
  templateUrl: './seeds.component.html',
  styleUrls: ['./seeds.component.scss']
})
export class SeedsComponent implements OnInit {

  seedsPhotoUrl_1: string;

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
        this.seedsPhotoUrl_1 = this.seedsPhotoResult[0][2];

        console.log(this.seedsPhotoUrl_1);
        console.log('seeds photo api call success');
        console.log(this.seedsPhotoResult);
      });
  }

}
