import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

import {GoogleSheetsService} from './shared/services/google-sheets.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoverPhotoComponent } from './cover-photo/cover-photo.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    CoverPhotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // question - JsonpModule
    JsonpModule,
    AppRoutingModule
  ],
  providers: [GoogleSheetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
