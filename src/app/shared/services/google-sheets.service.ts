import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GoogleSheetsService {

  constructor(private http: Http) {}

  getImages(sheetName) {
    const apiServerEndPoint = '/api' + sheetName;
    return this.http.get(apiServerEndPoint)
      .map(response => response.json());
  }
}

