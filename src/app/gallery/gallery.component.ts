import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../shared/services/google-sheets.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  apiGalleryEndPoint: string;
  apiGalleryResult: Array<string>;

  constructor(private googleSheetsService: GoogleSheetsService) { }

  ngOnInit() {
    console.log('hello from gallery inside onInit');
    this.apiGalleryEndPoint = '/home/gallery';
    this.apiGalleryResult = [];

    if (localStorage.getItem('categoryPhotos') === null) {
      this.getImagesFromSheets(this.apiGalleryEndPoint);
    } else {
      // stored value in local storage is a string
      // covert back to array to read data
      this.apiGalleryResult = JSON.parse(localStorage.getItem('categoryPhotos'));
    }
  }

  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(dataFromAPI => {
        // question - what is api Landing Result?
        this.apiGalleryResult = dataFromAPI.apiLandingResult[0];
              // local storage stores only string values
        localStorage.setItem('categoryPhotos', JSON.stringify(this.apiGalleryResult));
      });
  }

}
