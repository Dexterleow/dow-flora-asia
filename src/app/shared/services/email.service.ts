import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmailService {

  constructor(
    private http: Http
  ) { }

  sendEmail(name: string, email: string, message: string) {
  // sendEmail(formData) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    // let formValue = formData.value;

    return this.http.post('/send-email', { name: name, email: email, message: message }, options)
    // return this.http.post('/send-email', { formValue }, options)
      .map(response => response.json());
  }

}
