import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-encephalartos',
  templateUrl: './encephalartos.component.html',
  styleUrls: ['./encephalartos.component.css']
})
export class EncephalartosComponent implements OnInit {

  encephalartosPhotoUrl_1: string;
  encephalartosPhotoUrl_2: string;
  encephalartosPhotoUrl_3: string;
  encephalartosPhotoUrl_4: string;
  encephalartosPhotoUrl_5: string;

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
        this.encephalartosPhotoUrl_1 = this.plantsPhotoResult[112][2];
        this.encephalartosPhotoUrl_2 = this.plantsPhotoResult[113][2];
        this.encephalartosPhotoUrl_3 = this.plantsPhotoResult[114][2];
        this.encephalartosPhotoUrl_4 = this.plantsPhotoResult[115][2];
        this.encephalartosPhotoUrl_5 = this.plantsPhotoResult[116][2];


        console.log(this.encephalartosPhotoUrl_1);
        console.log('encephalartos photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }


}
