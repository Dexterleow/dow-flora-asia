import { Component, OnInit } from '@angular/core';
import { GoogleSheetsService } from '../../shared/services/google-sheets.service';


@Component({
  selector: 'app-bamboos-grasses',
  templateUrl: './bamboos-grasses.component.html',
  styleUrls: ['./bamboos-grasses.component.scss']
})
export class BamboosGrassesComponent implements OnInit {

  plantsPhotoEndPoint: string;
  plantsPhotoResult: Array<string>;
  bamboosGrassesArrayLength: number;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.plantsPhotoEndPoint = '/home/plants__bamboosGrasses';

    this.plantsPhotoResult = [];

    if (localStorage.getItem('plants__bamboosGrasses') === null) {
      this.getImagesFromSheets(this.plantsPhotoEndPoint);
    } else {
      // stored value in local storage is a string
      // covert back to array to read data
      this.plantsPhotoResult = JSON.parse(localStorage.getItem('plants__bamboosGrasses'));
      console.log(this.plantsPhotoResult);
    }
  }

  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(
      dataFromAPI => {
        this.plantsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.bamboosGrassesArrayLength = this.plantsPhotoResult.length;
        console.log(this.plantsPhotoResult);
        localStorage.setItem('plants__bamboosGrasses', JSON.stringify(this.plantsPhotoResult));
      });
  }
}

