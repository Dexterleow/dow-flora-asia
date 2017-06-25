import { Component, OnInit } from '@angular/core';
import { GoogleSheetsService } from '../shared/services/google-sheets.service';

@Component({
  selector: 'app-lingga-island',
  templateUrl: './lingga-island.component.html',
  styleUrls: ['./lingga-island.component.scss']
})

export class LinggaIslandComponent implements OnInit {

  linggaIslandPhotoUrl_Mountain1: string;
  linggaIslandPhotoUrl_Beach3: string;
  linggaIslandPhotoUrl_History1: string;
  linggaIslandPhotoUrl_Jetty3: string;

  apilinggaIslandPhotoEndPoint: string;
  apilinggaIslandPhotoResult: Array<string>;

  public lat: number;
  public lng: number;
  public zoomFactor: number;
  public scrollwheel: boolean;

  constructor(
    private googleSheetsService: GoogleSheetsService,
  ) {}

  ngOnInit() {
    this.apilinggaIslandPhotoEndPoint = '/home/lingga';
    this.apilinggaIslandPhotoResult = [];

    this.getImagesFromSheets(this.apilinggaIslandPhotoEndPoint);

    this.lat = -0.178914;
    this.lng = 104.617996;
    this.zoomFactor = 7;
    this.scrollwheel = false;


  }

  getImagesFromSheets(sheetName) {
    this.googleSheetsService.getImages(sheetName)
    .subscribe(dataFromAPI => {
      this.apilinggaIslandPhotoResult = dataFromAPI.apiLandingResult[0];
      this.linggaIslandPhotoUrl_Mountain1 = this.apilinggaIslandPhotoResult[0][2];
      this.linggaIslandPhotoUrl_Beach3 = this.apilinggaIslandPhotoResult[4][2];
      this.linggaIslandPhotoUrl_Jetty3 = this.apilinggaIslandPhotoResult[6][2];
      this.linggaIslandPhotoUrl_History1 = this.apilinggaIslandPhotoResult[8][2];

      // need to run loop here if decide to set an interval and change cover photo every few seconds

      // localStorage.setItem('sixtySecondsCategoryPhotos', JSON.stringify(this.apiCoverPhotoResult));

      console.log(this.linggaIslandPhotoUrl_Mountain1);
      console.log('lingga photo api call success');
      console.log(this.apilinggaIslandPhotoResult);
    });
  }

}

// https://github.com/SebastianM/angular-google-maps/issues/139
// https://github.com/philipbrack/example-angular2-google-maps-getNativeMap


// https://plnkr.co/edit/7Oblmh?p=preview

// import {
//   Component,
//   NgModule,
//   OnInit,
//   ViewChild
// } from '@angular/core';
//
// import {
//   BrowserModule
// } from '@angular/platform-browser';
//
// import { GoogleMapsAPIWrapper, GoogleMap } from "@agm/core";
// import { GoogleMap, Marker, MarkerOptions, MapOptions, InfoWindow, Polyline, MapOptions } from "@agm/core/services/google-maps-types";
//
// import { AgmCoreModule } from '@agm/core';
//
//
// @Component({
//   selector: 'my-app',
//   styles: [`
//     .top_left {
//       position: absolute;
//       z-index: 9;
//       top: 0px;
//       left: 0px;
//     }
//   `],
//   template: `
//     <div style="position: relative;">
//       <div [style.height]="mapHeight" #map>
//       </div>
//       <div class="top_left">
//         <button (click)="addGeofence()" type="button">New Polygon</button>
//         <button (click)="saveGeofence()" type="button">Save Polygon</button>
//       </div>
//     </div>`,
//   providers: [GoogleMapsAPIWrapper]
// })
//
// export class App implements OnInit {
//   @ViewChild('map') m: ElementRef;
//   private _map: GoogleMap;
//   public mapHeight : string = '500px';
//   private lat: number = 42.208085;
//   private lng: number = 43.923500;
//   private zoomlvl = 8;
//
//   private geofences: Polyline[] = [];
//   private activeGeofence?: Polyline;
//
//   private _onMapClickListener: MapsEventListener;
//   private onMapClick = (e): void => {
//     this.activeGeofence.getPath().push(e.latLng);
//   }
//
//   constructor(private mapApi : GoogleMapsAPIWrapper) {
//
//   }
//
//   addGeofence() {
//     if(this.activeGeofence == undefined || this.activeGeofence == null) {
//       this._onMapClickListener = this._map.addListener('click', this.onMapClick);
//       this.mapApi.createPolygon({ editable: true, draggable: true }).then(p => this.activeGeofence = p);
//     }
//   }
//
//   saveGeofence() {
//     if (this.activeGeofence && this.activeGeofence != null && this.activeGeofence.getPath().length > 0) {
//       let path: any = this.activeGeofence.getPath();
//
//       //array fore path
//       let points: GeofencePoint[] = []; // polygon points
//       let index: number = 0;
//
//       //get points from path
//       path.b.forEach(item => {
//         points.push({
//           id: index,
//           latitude: item.lat(),
//           longitude: item.lng()
//         });
//         index++;
//       });
//
//       // here you can post arry wherever you want
//
//       //for now just save it in memory
//       this.geofences.push(this.activeGeofence);
//
//       // then you need to dispose used objects
//       this.disposeSomeObjects();
//     }
//   }
//
//   private disposeSomeObjects() {
//     if (this.activeGeofence) {
//         this.activeGeofence.setEditable(false);
//         this.activeGeofence.setDraggable(false);
//         //this.activeGeofence.setMap(null);
//         this.activeGeofence = null;
//     }
//
//     if (this._onMapClickListener) {
//       this._onMapClickListener.remove();
//     }
//   }
//
//   private initMap() {
//     this.mapApi.createMap(this.m.nativeElement, <MapOptions>{
//       streetViewControl: false,
//       zoomControl: false,
//       mapTypeControl: true,
//       mapTypeId: 'hybrid',
//       mapTypeControlOptions: {
//         mapTypeIds: ['hybrid', 'roadmap', 'satellite'],
//         position: 3
//       },
//       center: {
//         lat: this.lat,
//         lng: this.lng
//       },
//       zoom: 8
//     }).then(() => this.mapApi.getNativeMap().then(map => {
//       this._map = map;
//     }));
//   }
//
//   ngOnInit() {
//     this.initMap();
//   }
// }
//
// interface GeofencePoint {
//   id: number;
//   latitude: number;
//   longitude: number;
// }
//
// @NgModule({
//   imports: [ BrowserModule, AgmCoreModule.forRoot() ],
//   declarations: [ App ],
//   bootstrap: [ App ]
// })
// export class AppModule {}
