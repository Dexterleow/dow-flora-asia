import { Component, OnInit } from '@angular/core';
import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-agave',
  templateUrl: './agave.component.html',
  styleUrls: ['./agave.component.scss']
})
export class AgaveComponent implements OnInit {

  plantsPhotoEndPoint: string;
  portraitPlantsPhotoResult: Array<string>;
  portraitAgaveArrayLength: number;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.plantsPhotoEndPoint = '/home/plants__agave';

    this.portraitPlantsPhotoResult = [];

    if (localStorage.getItem('plants__agave') === null) {
      this.getImagesFromSheets(this.plantsPhotoEndPoint);
    } else {
      // stored value in local storage is a string
      // covert back to array to read data
      this.portraitPlantsPhotoResult = JSON.parse(localStorage.getItem('plants__agave'));
      console.log(this.portraitPlantsPhotoResult);
    }
  }

  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(
      dataFromAPI => {
        this.portraitPlantsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.portraitAgaveArrayLength = this.portraitPlantsPhotoResult.length;
        console.log(this.portraitPlantsPhotoResult);
        localStorage.setItem('plants__agave', JSON.stringify(this.portraitPlantsPhotoResult));
      });
  }
}
