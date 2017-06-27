import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-stone-table',
  templateUrl: './stone-table.component.html',
  styleUrls: ['./stone-table.component.scss']
})
export class StoneTableComponent implements OnInit {

  plantsPhotoEndPoint: string;
  plantsPhotoResult: Array<string>;
  stoneArrayLength: number;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.plantsPhotoEndPoint = '/home/stones';

    this.plantsPhotoResult = [];

    if (localStorage.getItem('stones') === null) {
      this.getImagesFromSheets(this.plantsPhotoEndPoint);
    } else {
      // stored value in local storage is a string
      // covert back to array to read data
      this.plantsPhotoResult = JSON.parse(localStorage.getItem('stones'));
      console.log(this.plantsPhotoResult);
    }
  }

  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(
      dataFromAPI => {
        this.plantsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.stoneArrayLength = this.plantsPhotoResult.length;
        console.log(this.plantsPhotoResult);
        localStorage.setItem('stones', JSON.stringify(this.plantsPhotoResult));
      });
  }
}
