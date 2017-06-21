import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-palms',
  templateUrl: './palms.component.html',
  styleUrls: ['./palms.component.scss']
})
export class PalmsComponent implements OnInit {

  plantsPhotoEndPoint: string;
  plantsPhotoResult: Array<string>;
  palmsArrayLength: number;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.plantsPhotoEndPoint = '/home/plants__palms';

    this.plantsPhotoResult = [];

    if (localStorage.getItem('plants__palms') === null) {
      this.getImagesFromSheets(this.plantsPhotoEndPoint);
    } else {
      // stored value in local storage is a string
      // covert back to array to read data
      this.plantsPhotoResult = JSON.parse(localStorage.getItem('plants__palms'));
      console.log(this.plantsPhotoResult);
    }
  }

  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(
      dataFromAPI => {
        this.plantsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.palmsArrayLength = this.plantsPhotoResult.length;
        console.log(this.plantsPhotoResult);
        localStorage.setItem('plants__palms', JSON.stringify(this.plantsPhotoResult));
      });
  }
}
