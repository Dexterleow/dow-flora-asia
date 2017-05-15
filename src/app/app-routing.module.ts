import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlantsComponent } from './plants/plants.component'
import { PlantsCardsComponent } from './plants-cards/plants-cards.component'

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


// const appRoutes: Routes = [
//   {path: '', component: HomeComponent},
//   {path: '**', component: PageNotFoundComponent}
// ];

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
   {
       path: 'about',
       component: AboutComponent
   },
    {
      path: 'plants',
      component: PlantsComponent,
      children: [
    // {
    //     path: 'adenium',
    //     component: AdeniumComponent
    // }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
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

export class AppRoutingModule {}
