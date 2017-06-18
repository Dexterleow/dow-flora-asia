import { Component, OnInit } from '@angular/core';
import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-adenium',
  templateUrl: './adenium.component.html',
  styleUrls: ['./adenium.component.scss']
})
export class AdeniumComponent implements OnInit {

  plantsPhotoEndPoint: string;
  plantsPhotoResult: Array<string>;
  adeniumArrayLength: number;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.plantsPhotoEndPoint = '/home/plants__adenium';
    this.plantsPhotoResult = [];
    if (localStorage.getItem('plants__adenium') === null) {
      this.getImagesFromSheets(this.plantsPhotoEndPoint);
    } else {
      // stored value in local storage is a string
      // covert back to array to read data
      this.plantsPhotoResult = JSON.parse(localStorage.getItem('plants__adenium'));
    }
  }

  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(dataFromAPI => {
        this.plantsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.adeniumArrayLength = this.plantsPhotoResult.length;
        localStorage.setItem('plants__adenium', JSON.stringify(this.plantsPhotoResult));

        console.log('adenium photo api call success');
        console.log(this.plantsPhotoResult);
      });
  }

}
