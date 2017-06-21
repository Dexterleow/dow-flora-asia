import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-encephalartos',
  templateUrl: './encephalartos.component.html',
  styleUrls: ['./encephalartos.component.scss']
})
export class EncephalartosComponent implements OnInit {

   plantsPhotoEndPoint: string;
  plantsPhotoResult: Array<string>;
  encephalartosArrayLength: number;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.plantsPhotoEndPoint = '/home/plants__encephalartos';

    this.plantsPhotoResult = [];

    if (localStorage.getItem('plants__encephalartos') === null) {
      this.getImagesFromSheets(this.plantsPhotoEndPoint);
    } else {
      // stored value in local storage is a string
      // covert back to array to read data
      this.plantsPhotoResult = JSON.parse(localStorage.getItem('plants__encephalartos'));
      console.log(this.plantsPhotoResult);
    }
  }

  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(
      dataFromAPI => {
        this.plantsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.encephalartosArrayLength = this.plantsPhotoResult.length;
        console.log(this.plantsPhotoResult);
        localStorage.setItem('plants__encephalartos', JSON.stringify(this.plantsPhotoResult));
      });
  }
}

