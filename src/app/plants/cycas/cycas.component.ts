import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-cycas',
  templateUrl: './cycas.component.html',
  styleUrls: ['./cycas.component.scss']
})
export class CycasComponent implements OnInit {

   plantsPhotoEndPoint: string;
  plantsPhotoResult: Array<string>;
  cycasArrayLength: number;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.plantsPhotoEndPoint = '/home/plants__cycas';

    this.plantsPhotoResult = [];

    if (localStorage.getItem('plants__cycas') === null) {
      this.getImagesFromSheets(this.plantsPhotoEndPoint);
    } else {
      // stored value in local storage is a string
      // covert back to array to read data
      this.plantsPhotoResult = JSON.parse(localStorage.getItem('plants__cycas'));
      console.log(this.plantsPhotoResult);
    }
  }

  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(
      dataFromAPI => {
        this.plantsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.cycasArrayLength = this.plantsPhotoResult.length;
        console.log(this.plantsPhotoResult);
        localStorage.setItem('plants__cycas', JSON.stringify(this.plantsPhotoResult));
      });
  }
}
