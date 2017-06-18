// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { GoogleSheetsService } from '../shared/services/google-sheets.service';
import {MapsAPILoader, SebmGoogleMap} from 'angular2-google-maps/core';

@Component({
  selector: 'app-lingga-island',
  templateUrl: './lingga-island.component.html',
  styleUrls: ['./lingga-island.component.scss']
})
export class LinggaIslandComponent implements OnInit, AfterViewInit {
// export class LinggaIslandComponent implements OnInit {
  // @ViewChild(SebmGoogleMap) map: SebmGoogleMap;
  @ViewChild(SebmGoogleMap) public map: SebmGoogleMap;

  linggaIslandPhotoUrl_Mountain1: string;
  linggaIslandPhotoUrl_Beach3: string;
  linggaIslandPhotoUrl_History1: string;
  linggaIslandPhotoUrl_Jetty3: string;

  apilinggaIslandPhotoEndPoint: string;
  apilinggaIslandPhotoResult: Array<string>;

  public lat: number;
  public lng: number;
  // lat: number = 51.678418;
  // lng: number = 7.809007;
  public zoomFactor: number;
  public scrollwheel: boolean;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.apilinggaIslandPhotoEndPoint = '/home/lingga';
    this.apilinggaIslandPhotoResult = [];

    this.getImagesFromSheets(this.apilinggaIslandPhotoEndPoint);

    this.lat = -0.178914;
    this.lng = 104.617996;
    this.zoomFactor = 7;
    this.scrollwheel = false;
    // this.map.triggerResize();

  }
  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
    .subscribe(dataFromAPI => {
      this.apilinggaIslandPhotoResult = dataFromAPI.apiLandingResult[0];
      this.linggaIslandPhotoUrl_Mountain1 = this.apilinggaIslandPhotoResult[0][2];
      this.linggaIslandPhotoUrl_Beach3 = this.apilinggaIslandPhotoResult[4][2];
      this.linggaIslandPhotoUrl_Jetty3 = this.apilinggaIslandPhotoResult[6][2];
      this.linggaIslandPhotoUrl_History1 = this.apilinggaIslandPhotoResult[8][2];

      // need to run loop here if decide to set an interval and change cover photo every few seconds

      // localStorage.setItem('sixtySecondsCategoryPhotos', JSON.stringify(this.apiCoverPhotoResult));

      console.log(this.linggaIslandPhotoUrl_Mountain1);
      console.log('lingga photo api call success');
      console.log(this.apilinggaIslandPhotoResult);
    });
  }

  public ngAfterViewInit() {
    this.map.triggerResize();
    console.log('hello');
  }

}
