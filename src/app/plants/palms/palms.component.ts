import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-palms',
  templateUrl: './palms.component.html',
  styleUrls: ['./palms.component.css']
})
export class PalmsComponent implements OnInit {

  palmsPhotoUrl_1: string;
  palmsPhotoUrl_2: string;
  palmsPhotoUrl_3: string;
  palmsPhotoUrl_4: string;
  palmsPhotoUrl_5: string;

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
        this.palmsPhotoUrl_1 = this.plantsPhotoResult[159][2];
        this.palmsPhotoUrl_2 = this.plantsPhotoResult[160][2];
        this.palmsPhotoUrl_3 = this.plantsPhotoResult[161][2];
        this.palmsPhotoUrl_4 = this.plantsPhotoResult[162][2];
        this.palmsPhotoUrl_5 = this.plantsPhotoResult[163][2];

        console.log(this.palmsPhotoUrl_1);
        console.log('palms photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }


}
