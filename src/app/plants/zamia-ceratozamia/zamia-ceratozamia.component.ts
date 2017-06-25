import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-zamia-ceratozamia',
  templateUrl: './zamia-ceratozamia.component.html',
  styleUrls: ['./zamia-ceratozamia.component.scss']
})
export class ZamiaCeratozamiaComponent implements OnInit {

  plantsPhotoEndPoint: string;
  plantsPhotoResult: Array<string>;
  zamiaCeratozamiaArrayLength: number;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.plantsPhotoEndPoint = '/home/plants__zamiaCeratozamia';

    this.plantsPhotoResult = [];

    if (localStorage.getItem('plants__zamiaCeratozamia') === null) {
      this.getImagesFromSheets(this.plantsPhotoEndPoint);
    } else {
      // stored value in local storage is a string
      // covert back to array to read data
      this.plantsPhotoResult = JSON.parse(localStorage.getItem('plants__zamiaCeratozamia'));
      console.log(this.plantsPhotoResult);
    }
  }

  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(
      dataFromAPI => {
        this.plantsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.zamiaCeratozamiaArrayLength = this.plantsPhotoResult.length;
        console.log(this.plantsPhotoResult);
        localStorage.setItem('plants__zamiaCeratozamia', JSON.stringify(this.plantsPhotoResult));
      });
  }
}
