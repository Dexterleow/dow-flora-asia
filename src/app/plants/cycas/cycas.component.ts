import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-cycas',
  templateUrl: './cycas.component.html',
  styleUrls: ['./cycas.component.css']
})
export class CycasComponent implements OnInit {

  cycasPhotoUrl_1: string;
  cycasPhotoUrl_2: string;
  cycasPhotoUrl_3: string;
  cycasPhotoUrl_4: string;

  plantsPhotoEndPoint: string;
  plantsPhotoResult: Array<string>;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.plantsPhotoEndPoint = '/home/plants';
    this.plantsPhotoResult = [];

    this.getImagesFromSheets(this.plantsPhotoEndPoint);
  }
  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(dataFromAPI => {
        this.plantsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.cycasPhotoUrl_1 = this.plantsPhotoResult[103][2];
        this.cycasPhotoUrl_2 = this.plantsPhotoResult[104][2];
        this.cycasPhotoUrl_3 = this.plantsPhotoResult[105][2];
        this.cycasPhotoUrl_4 = this.plantsPhotoResult[106][2];


        console.log(this.cycasPhotoUrl_1);
        console.log('cycas photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
