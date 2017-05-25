import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlantsComponent } from './plants/plants.component';
import { LinggaIslandComponent } from './lingga-island/lingga-island.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { CarouselComponent } from './carousel/carousel.component';
import { AdeniumComponent } from './plants/adenium/adenium.component';
import { AgaveComponent } from './plants/agave/agave.component';
import { AglaonemasComponent } from './plants/aglaonemas/aglaonemas.component';
import { AlocasiaComponent } from './plants/alocasia/alocasia.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'carousel', pathMatch: 'full' },
      { path: 'carousel', component: CarouselComponent },
      { path: 'adenium', component: AdeniumComponent },
      { path: 'agave', component: AgaveComponent },
      { path: 'aglaonemas', component: AglaonemasComponent },
      { path: 'alocasia', component: AlocasiaComponent },
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'lingga-island',
    component: LinggaIslandComponent
  },
  {
    path: 'plants',
    component: PlantsComponent,
    children: [
      { path: '', redirectTo: 'adenium', pathMatch: 'full' },
      { path: 'adenium', component: AdeniumComponent },
      { path: 'agave', component: AgaveComponent },
      { path: 'aglaonemas', component: AglaonemasComponent },
      { path: 'alocasia', component: AlocasiaComponent },
    ]
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: '',
    redirectTo: '/home/carousel',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home/carousel',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
