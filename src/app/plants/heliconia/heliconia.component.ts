import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-heliconia',
  templateUrl: './heliconia.component.html',
  styleUrls: ['./heliconia.component.scss']
})
export class HeliconiaComponent implements OnInit {

   plantsPhotoEndPoint: string;
  plantsPhotoResult: Array<string>;
  heliconiaArrayLength: number;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.plantsPhotoEndPoint = '/home/plants__heliconia';

    this.plantsPhotoResult = [];

    if (localStorage.getItem('plants__heliconia') === null) {
      this.getImagesFromSheets(this.plantsPhotoEndPoint);
    } else {
      // stored value in local storage is a string
      // covert back to array to read data
      this.plantsPhotoResult = JSON.parse(localStorage.getItem('plants__heliconia'));
      console.log(this.plantsPhotoResult);
    }
  }

  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(
      dataFromAPI => {
        this.plantsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.heliconiaArrayLength = this.plantsPhotoResult.length;
        console.log(this.plantsPhotoResult);
        localStorage.setItem('plants__heliconia', JSON.stringify(this.plantsPhotoResult));
      });
  }
}
