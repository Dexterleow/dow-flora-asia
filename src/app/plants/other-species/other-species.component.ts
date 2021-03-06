import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-other-species',
  templateUrl: './other-species.component.html',
  styleUrls: ['./other-species.component.scss']
})
export class OtherSpeciesComponent implements OnInit {

  plantsPhotoEndPoint: string;
  plantsPhotoResult: Array<string>;
  otherSpeciesArrayLength: number;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.plantsPhotoEndPoint = '/home/plants__otherSpecies';

    this.plantsPhotoResult = [];

    if (localStorage.getItem('plants__otherSpecies') === null) {
      this.getImagesFromSheets(this.plantsPhotoEndPoint);
    } else {
      // stored value in local storage is a string
      // covert back to array to read data
      this.plantsPhotoResult = JSON.parse(localStorage.getItem('plants__otherSpecies'));
      console.log(this.plantsPhotoResult);
    }
  }

  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(
      dataFromAPI => {
        this.plantsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.otherSpeciesArrayLength = this.plantsPhotoResult.length;
        console.log(this.plantsPhotoResult);
        localStorage.setItem('plants__otherSpecies', JSON.stringify(this.plantsPhotoResult));
      });
  }
}