import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-aquatic-plants',
  templateUrl: './aquatic-plants.component.html',
  styleUrls: ['./aquatic-plants.component.scss']
})
export class AquaticPlantsComponent implements OnInit {

  plantsPhotoEndPoint: string;
  plantsPhotoResult: Array<string>;
  aquaticPlantsArrayLength: number;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.plantsPhotoEndPoint = '/home/plants__aquaticPlants';

    this.plantsPhotoResult = [];

    if (localStorage.getItem('plants__aquaticPlants') === null) {
      this.getImagesFromSheets(this.plantsPhotoEndPoint);
    } else {
      // stored value in local storage is a string
      // covert back to array to read data
      this.plantsPhotoResult = JSON.parse(localStorage.getItem('plants__aquaticPlants'));
      console.log(this.plantsPhotoResult);
    }
  }

  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(
      dataFromAPI => {
        this.plantsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.aquaticPlantsArrayLength = this.plantsPhotoResult.length;
        console.log(this.plantsPhotoResult);
        localStorage.setItem('plants__aquaticPlants', JSON.stringify(this.plantsPhotoResult));
      });
  }
}

