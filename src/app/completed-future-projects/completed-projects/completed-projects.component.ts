import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/services/google-sheets.service';

@Component({
  selector: 'app-completed-projects',
  templateUrl: './completed-projects.component.html',
  styleUrls: ['./completed-projects.component.scss']
})
export class CompletedProjectsComponent implements OnInit {

  // Tennery
  completed_projectsPhotoUrl_1: string;
  completed_projectsPhotoUrl_2: string;
  completed_projectsPhotoUrl_3: string;
  completed_projectsPhotoUrl_4: string;
  completed_projectsPhotoUrl_5: string;
  completed_projectsPhotoUrl_6: string;
  completed_projectsPhotoUrl_7: string;

  // Floridian
  completed_projectsPhotoUrl_8: string;
  completed_projectsPhotoUrl_9: string;
  completed_projectsPhotoUrl_10: string;
  completed_projectsPhotoUrl_11: string;

  // Private residence [in S'pore]
  completed_projectsPhotoUrl_12: string;

  // UOB Twin Towers [in S'pore]
  completed_projectsPhotoUrl_13: string;

  // Hyat Regency [in S'pore]
  completed_projectsPhotoUrl_14: string;

  completed_projectsPhotoEndPoint: string;
  completed_projectsPhotoResult: Array<string>;

  constructor(private googleSheetsService: GoogleSheetsService) {
  }

  ngOnInit() {
    this.completed_projectsPhotoEndPoint = '/home/completedAndFutureProjects';

    this.completed_projectsPhotoResult = [];

    if (localStorage.getItem('completed_projects') === null) {
      this.getImagesFromSheets(this.completed_projectsPhotoEndPoint);
    } else {
      // stored value in local storage is a string
      // covert back to array to read data
      this.completed_projectsPhotoEndPoint = JSON.parse(localStorage.getItem('completed_projects'));
      console.log(this.completed_projectsPhotoResult);
    }

  }
  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
      .subscribe(dataFromAPI => {
        this.completed_projectsPhotoResult = dataFromAPI.apiLandingResult[0];
        this.completed_projectsPhotoUrl_1 = this.completed_projectsPhotoResult[0][2];
        this.completed_projectsPhotoUrl_2 = this.completed_projectsPhotoResult[1][2];
        this.completed_projectsPhotoUrl_3 = this.completed_projectsPhotoResult[2][2];
        this.completed_projectsPhotoUrl_4 = this.completed_projectsPhotoResult[3][2];
        this.completed_projectsPhotoUrl_5 = this.completed_projectsPhotoResult[4][2];
        this.completed_projectsPhotoUrl_6 = this.completed_projectsPhotoResult[5][2];
        this.completed_projectsPhotoUrl_7 = this.completed_projectsPhotoResult[6][2];
        this.completed_projectsPhotoUrl_8 = this.completed_projectsPhotoResult[7][2];
        this.completed_projectsPhotoUrl_9 = this.completed_projectsPhotoResult[8][2];
        this.completed_projectsPhotoUrl_10 = this.completed_projectsPhotoResult[9][2];
        this.completed_projectsPhotoUrl_11 = this.completed_projectsPhotoResult[10][2];
        this.completed_projectsPhotoUrl_12 = this.completed_projectsPhotoResult[12][2];
        this.completed_projectsPhotoUrl_13 = this.completed_projectsPhotoResult[13][2];
        this.completed_projectsPhotoUrl_14 = this.completed_projectsPhotoResult[14][2];

        console.log(this.completed_projectsPhotoUrl_1);
        console.log('completed_projectsPhotoUrl_1 photo api call success');
        console.log(this.completed_projectsPhotoResult);
      });
  }

}
