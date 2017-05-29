import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-treated-media',
  templateUrl: './treated-media.component.html',
  styleUrls: ['./treated-media.component.css']
})
export class TreatedMediaComponent implements OnInit {

  treated_mediaPhotoUrl_1: string;

  media_charcoalsPhotoEndPoint: string;
  media_charcoalsPhotoResult: Array<string>;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.media_charcoalsPhotoEndPoint = '/home/growingMediaAndCharcoals';
    this.media_charcoalsPhotoResult = [];

    this.getImagesFromSheets(this.media_charcoalsPhotoEndPoint);
  }
  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(dataFromAPI => {
        this.media_charcoalsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.treated_mediaPhotoUrl_1 = this.media_charcoalsPhotoResult[0][2];

        console.log(this.treated_mediaPhotoUrl_1);
        console.log('treated_mediaPhotoUrl_1 photo api call success');
        console.log(this.media_charcoalsPhotoResult);
      });
  }

}
