import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-zamia-ceratozamia',
  templateUrl: './zamia-ceratozamia.component.html',
  styleUrls: ['./zamia-ceratozamia.component.css']
})
export class ZamiaCeratozamiaComponent implements OnInit {

  zamia_ceratozamiaPhotoUrl_1: string;
  zamia_ceratozamiaPhotoUrl_2: string;
  zamia_ceratozamiaPhotoUrl_3: string;
  zamia_ceratozamiaPhotoUrl_4: string;
  zamia_ceratozamiaPhotoUrl_5: string;


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
        this.zamia_ceratozamiaPhotoUrl_1 = this.plantsPhotoResult[217][2];
        this.zamia_ceratozamiaPhotoUrl_2 = this.plantsPhotoResult[218][2];
        this.zamia_ceratozamiaPhotoUrl_3 = this.plantsPhotoResult[219][2];
        this.zamia_ceratozamiaPhotoUrl_4 = this.plantsPhotoResult[220][2];
        this.zamia_ceratozamiaPhotoUrl_5 = this.plantsPhotoResult[221][2];

        console.log(this.zamia_ceratozamiaPhotoUrl_1);
        console.log('zamia_ceratozamia photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
