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
import { CoverPhotoComponent } from './cover-photo/cover-photo.component';
import { NavbarComponent } from './core/navbar.component';
import { AboutComponent } from './about/about.component';
import { PlantsComponent } from './plants/plants.component';
import { PlantsCardsComponent } from './plants-cards/plants-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    CoverPhotoComponent,
    NavbarComponent,
    AboutComponent,
    PlantsComponent,
    PlantsCardsComponent,
    PlantsCardsComponent,
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
