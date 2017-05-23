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
import { LinggaIslandComponent } from './lingga-island/lingga-island.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

import { CarouselModule } from 'ngx-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { AdeniumComponent } from './plants/adenium/adenium.component';
import { AgaveComponent } from './plants/agave/agave.component';

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
    LinggaIslandComponent,
    ProjectsComponent,
    ContactUsComponent,
    FooterComponent,
    SideMenuComponent,
    CarouselComponent,
    AdeniumComponent,
    AgaveComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // question - JsonpModule
    CarouselModule.forRoot(),
    JsonpModule,
    AppRoutingModule
  ],
  providers: [GoogleSheetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
