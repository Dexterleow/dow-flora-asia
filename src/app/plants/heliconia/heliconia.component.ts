import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-heliconia',
  templateUrl: './heliconia.component.html',
  styleUrls: ['./heliconia.component.scss']
})
export class HeliconiaComponent implements OnInit {

  heliconiaPhotoUrl_1: string;
  heliconiaPhotoUrl_2: string;
  heliconiaPhotoUrl_3: string;
  heliconiaPhotoUrl_4: string;
  heliconiaPhotoUrl_5: string;


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
        this.heliconiaPhotoUrl_1 = this.plantsPhotoResult[139][2];
        this.heliconiaPhotoUrl_2 = this.plantsPhotoResult[140][2];
        this.heliconiaPhotoUrl_3 = this.plantsPhotoResult[141][2];
        this.heliconiaPhotoUrl_4 = this.plantsPhotoResult[142][2];
        this.heliconiaPhotoUrl_5 = this.plantsPhotoResult[143][2];

        console.log(this.heliconiaPhotoUrl_1);
        console.log('heliconia photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
