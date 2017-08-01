import { Component, OnInit } from '@angular/core';
import { GoogleSheetsService } from '../shared/services/google-sheets.service';

@Component({
  selector: 'app-lingga-island',
  templateUrl: './lingga-island.component.html',
  styleUrls: ['./lingga-island.component.scss']
})

export class LinggaIslandComponent implements OnInit {

  linggaIslandPhotoUrl_Mountain1: string;
  linggaIslandPhotoUrl_Beach3: string;
  linggaIslandPhotoUrl_History1: string;
  linggaIslandPhotoUrl_Jetty3: string;
  linggaIslandPhotoUrl_EcoFarm: string;

  apilinggaIslandPhotoEndPoint: string;
  apilinggaIslandPhotoResult: Array<string>;

  public lat: number;
  public lng: number;
  public zoomFactor: number;
  public scrollwheel: boolean;

  constructor(
    private googleSheetsService: GoogleSheetsService,
  ) { }

  ngOnInit() {
    this.apilinggaIslandPhotoEndPoint = '/home/lingga';
    this.apilinggaIslandPhotoResult = [];

    this.getImagesFromSheets(this.apilinggaIslandPhotoEndPoint);

    this.lat = -0.178914;
    this.lng = 104.617996;
    this.zoomFactor = 7;
    this.scrollwheel = false;
  }

  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(dataFromAPI => {
        this.apilinggaIslandPhotoResult = dataFromAPI.apiLandingResult[0];
        this.linggaIslandPhotoUrl_Mountain1 = this.apilinggaIslandPhotoResult[0][2];
        this.linggaIslandPhotoUrl_Beach3 = this.apilinggaIslandPhotoResult[4][2];
        this.linggaIslandPhotoUrl_Jetty3 = this.apilinggaIslandPhotoResult[6][2];
        this.linggaIslandPhotoUrl_History1 = this.apilinggaIslandPhotoResult[8][2];
        this.linggaIslandPhotoUrl_EcoFarm = this.apilinggaIslandPhotoResult[9][2];
      });
  }

}

// https://github.com/SebastianM/angular-google-maps/issues/139
// https://github.com/philipbrack/example-angular2-google-maps-getNativeMap
// https://plnkr.co/edit/7Oblmh?p=preview
