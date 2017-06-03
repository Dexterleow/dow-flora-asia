import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-philodendrons',
  templateUrl: './philodendrons.component.html',
  styleUrls: ['./philodendrons.component.scss']
})
export class PhilodendronsComponent implements OnInit {

  philodendronsPhotoUrl_1: string;
  philodendronsPhotoUrl_2: string;
  philodendronsPhotoUrl_3: string;
  philodendronsPhotoUrl_4: string;
  philodendronsPhotoUrl_5: string;

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
        this.philodendronsPhotoUrl_1 = this.plantsPhotoResult[172][2];
        this.philodendronsPhotoUrl_2 = this.plantsPhotoResult[173][2];
        this.philodendronsPhotoUrl_3 = this.plantsPhotoResult[174][2];
        this.philodendronsPhotoUrl_4 = this.plantsPhotoResult[175][2];
        this.philodendronsPhotoUrl_5 = this.plantsPhotoResult[176][2];

        console.log(this.philodendronsPhotoUrl_1);
        console.log('philodendrons photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
