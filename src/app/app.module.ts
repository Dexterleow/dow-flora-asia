import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
// import { AgmCoreModule } from 'angular2-google-maps/core';
import { AgmCoreModule } from '@agm/core';
import { ApiKeys } from '../../secret/api-keys';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

import {GoogleSheetsService} from './shared/services/google-sheets.service';
import {EmailService} from './shared/services/email.service';

import { NgxErrorsModule } from '@ultimate/ngxerrors';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoverPhotoComponent } from './cover-photo/cover-photo.component';
import { NavbarComponent } from './core/navbar.component';
import { AboutComponent } from './about/about.component';
import { PlantsComponent } from './plants/plants.component';
import { LinggaIslandComponent } from './lingga-island/lingga-island.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

import { CarouselModule } from 'ngx-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { AdeniumComponent } from './plants/adenium/adenium.component';
import { AgaveComponent } from './plants/agave/agave.component';
import { AglaonemasComponent } from './plants/aglaonemas/aglaonemas.component';
import { AlocasiaComponent } from './plants/alocasia/alocasia.component';
import { AnanasComponent } from './plants/ananas/ananas.component';
import { AquaticPlantsComponent } from './plants/aquatic-plants/aquatic-plants.component';
import { BamboosGrassesComponent } from './plants/bamboos-grasses/bamboos-grasses.component';
import { BougainvilleasComponent } from './plants/bougainvilleas/bougainvilleas.component';
import { BoweniaComponent } from './plants/bowenia/bowenia.component';
import { CactusComponent } from './plants/cactus/cactus.component';
import { CaladiumComponent } from './plants/caladium/caladium.component';
import { CalatheasComponent } from './plants/calatheas/calatheas.component';
import { ClimbersVinesComponent } from './plants/climbers-vines/climbers-vines.component';
import { CordylineComponent } from './plants/cordyline/cordyline.component';
import { CostusComponent } from './plants/costus/costus.component';
import { CrotonComponent } from './plants/croton/croton.component';
import { CrypthanthusComponent } from './plants/crypthanthus/crypthanthus.component';
import { CycasComponent } from './plants/cycas/cycas.component';
import { DracaeanaComponent } from './plants/dracaeana/dracaeana.component';
import { EncephalartosComponent } from './plants/encephalartos/encephalartos.component';
import { FlowersComponent } from './plants/flowers/flowers.component';
import { FernsComponent } from './plants/ferns/ferns.component';
import { GroundCoversComponent } from './plants/ground-covers/ground-covers.component';
import { HangingPlantsComponent } from './plants/hanging-plants/hanging-plants.component';
import { HeliconiaComponent } from './plants/heliconia/heliconia.component';
import { HerbsComponent } from './plants/herbs/herbs.component';
import { HibiscusComponent } from './plants/hibiscus/hibiscus.component';
import { IndoorPlantsComponent } from './plants/indoor-plants/indoor-plants.component';
import { PalmsComponent } from './plants/palms/palms.component';
import { SaggoPalmComponent } from './plants/saggo-palm/saggo-palm.component';
import { PandanusComponent } from './plants/pandanus/pandanus.component';
import { PhilodendronsComponent } from './plants/philodendrons/philodendrons.component';

import { PlumeriasComponent } from './plants/plumerias/plumerias.component';
import { ShrubsComponent } from './plants/shrubs/shrubs.component';
import { StreliziaComponent } from './plants/strelizia/strelizia.component';
import { SucculentPlantsComponent } from './plants/succulent-plants/succulent-plants.component';
import { TreesComponent } from './plants/trees/trees.component';
import { TropicalFruitsComponent } from './plants/tropical-fruits/tropical-fruits.component';
import { ZamiaCeratozamiaComponent } from './plants/zamia-ceratozamia/zamia-ceratozamia.component';
import { OtherSpeciesComponent } from './plants/other-species/other-species.component';

import { SeedsCategoryComponent } from './seeds-category/seeds-category.component';
import { SeedsComponent } from './seeds-category/seeds/seeds.component';
import { SeedlingsComponent } from './seeds-category/seedlings/seedlings.component';
import { MediaCharcoalsComponent } from './media-charcoals/media-charcoals.component';
import { TreatedMediaComponent } from './media-charcoals/treated-media/treated-media.component';
import { CharcoalsComponent } from './media-charcoals/charcoals/charcoals.component';

import { StonesComponent } from './stones/stones.component';
import { StoneTableComponent } from './stones/stone-table/stone-table.component';
import { PebbleComponent } from './stones/pebble/pebble.component';

import { CompletedFutureProjectsComponent } from './completed-future-projects/completed-future-projects.component';
import { CompletedProjectsComponent } from './completed-future-projects/completed-projects/completed-projects.component';
import { FutureProjectsComponent } from './completed-future-projects/future-projects/future-projects.component';
import { OperationCapabilityComponent } from './operation-capability/operation-capability.component';
import { AboutUsDetailsComponent } from './about-us-details/about-us-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    CoverPhotoComponent,
    NavbarComponent,
    AboutComponent,
    PlantsComponent,
    LinggaIslandComponent,
    ProjectsComponent,
    ContactUsComponent,
    FooterComponent,
    SideMenuComponent,
    CarouselComponent,
    AdeniumComponent,
    AgaveComponent,
    AglaonemasComponent,
    AlocasiaComponent,
    AnanasComponent,
    AquaticPlantsComponent,
    BamboosGrassesComponent,
    BougainvilleasComponent,
    BoweniaComponent,
    CactusComponent,
    CaladiumComponent,
    CalatheasComponent,
    ClimbersVinesComponent,
    CordylineComponent,
    CostusComponent,
    CrotonComponent,
    CrypthanthusComponent,
    CycasComponent,
    DracaeanaComponent,
    EncephalartosComponent,
    FlowersComponent,
    FernsComponent,
    GroundCoversComponent,
    HangingPlantsComponent,
    HeliconiaComponent,
    HerbsComponent,
    HibiscusComponent,
    IndoorPlantsComponent,
    PalmsComponent,
    SaggoPalmComponent,
    PandanusComponent,
    PhilodendronsComponent,
    PlumeriasComponent,
    ShrubsComponent,
    StreliziaComponent,
    SucculentPlantsComponent,
    TreesComponent,
    TropicalFruitsComponent,
    ZamiaCeratozamiaComponent,
    OtherSpeciesComponent,
    SeedsCategoryComponent,
    SeedsComponent,
    SeedlingsComponent,
    MediaCharcoalsComponent,
    TreatedMediaComponent,
    CharcoalsComponent,
    StonesComponent,
    StoneTableComponent,
    PebbleComponent,
    CompletedFutureProjectsComponent,
    CompletedProjectsComponent,
    FutureProjectsComponent,
    OperationCapabilityComponent,
    AboutUsDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    // question - JsonpModule
    CarouselModule.forRoot(),
    JsonpModule,
    AppRoutingModule,
    NgxErrorsModule,
    AgmCoreModule.forRoot({
      apiKey: ApiKeys.key
    })

  ],
  providers: [GoogleSheetsService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
