import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-dracaeana',
  templateUrl: './dracaeana.component.html',
  styleUrls: ['./dracaeana.component.css']
})
export class DracaeanaComponent implements OnInit {

  dracaeanaPhotoUrl_1: string;
  dracaeanaPhotoUrl_2: string;
  dracaeanaPhotoUrl_3: string;
  dracaeanaPhotoUrl_4: string;
  dracaeanaPhotoUrl_5: string;

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
        this.dracaeanaPhotoUrl_1 = this.plantsPhotoResult[107][2];
        this.dracaeanaPhotoUrl_2 = this.plantsPhotoResult[108][2];
        this.dracaeanaPhotoUrl_3 = this.plantsPhotoResult[109][2];
        this.dracaeanaPhotoUrl_4 = this.plantsPhotoResult[110][2];
        this.dracaeanaPhotoUrl_5 = this.plantsPhotoResult[111][2];


        console.log(this.dracaeanaPhotoUrl_1);
        console.log('dracaeana photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }


}
