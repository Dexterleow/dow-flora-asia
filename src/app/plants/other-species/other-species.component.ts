import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-other-species',
  templateUrl: './other-species.component.html',
  styleUrls: ['./other-species.component.css']
})
export class OtherSpeciesComponent implements OnInit {

  other_speciesPhotoUrl_1: string;
  other_speciesPhotoUrl_2: string;
  other_speciesPhotoUrl_3: string;
  other_speciesPhotoUrl_4: string;


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
        this.other_speciesPhotoUrl_1 = this.plantsPhotoResult[222][2];
        this.other_speciesPhotoUrl_2 = this.plantsPhotoResult[223][2];
        this.other_speciesPhotoUrl_3 = this.plantsPhotoResult[224][2];
        this.other_speciesPhotoUrl_4 = this.plantsPhotoResult[225][2];

        console.log(this.other_speciesPhotoUrl_1);
        console.log('other_species photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }
}
