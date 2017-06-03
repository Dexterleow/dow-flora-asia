import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-ferns',
  templateUrl: './ferns.component.html',
  styleUrls: ['./ferns.component.scss']
})
export class FernsComponent implements OnInit {

  fernsPhotoUrl_1: string;
  fernsPhotoUrl_2: string;
  fernsPhotoUrl_3: string;
  fernsPhotoUrl_4: string;
  fernsPhotoUrl_5: string;


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
        this.fernsPhotoUrl_1 = this.plantsPhotoResult[124][2];
        this.fernsPhotoUrl_2 = this.plantsPhotoResult[125][2];
        this.fernsPhotoUrl_3 = this.plantsPhotoResult[126][2];
        this.fernsPhotoUrl_4 = this.plantsPhotoResult[127][2];
        this.fernsPhotoUrl_5 = this.plantsPhotoResult[128][2];

        console.log(this.fernsPhotoUrl_1);
        console.log('ferns photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
