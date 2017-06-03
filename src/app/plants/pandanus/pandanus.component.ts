import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-pandanus',
  templateUrl: './pandanus.component.html',
  styleUrls: ['./pandanus.component.scss']
})
export class PandanusComponent implements OnInit {

  pandanusPhotoUrl_1: string;
  pandanusPhotoUrl_2: string;
  pandanusPhotoUrl_3: string;
  pandanusPhotoUrl_4: string;
  pandanusPhotoUrl_5: string;
  pandanusPhotoUrl_6: string;

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
        this.pandanusPhotoUrl_1 = this.plantsPhotoResult[166][2];
        this.pandanusPhotoUrl_2 = this.plantsPhotoResult[167][2];
        this.pandanusPhotoUrl_3 = this.plantsPhotoResult[168][2];
        this.pandanusPhotoUrl_4 = this.plantsPhotoResult[169][2];
        this.pandanusPhotoUrl_5 = this.plantsPhotoResult[170][2];
        this.pandanusPhotoUrl_6 = this.plantsPhotoResult[171][2];

        console.log(this.pandanusPhotoUrl_1);
        console.log('pandanus photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }
}
