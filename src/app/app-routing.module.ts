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
      { path: 'ananas', component: AnanasComponent },
      { path: 'aquatic-plants', component: AquaticPlantsComponent },
      { path: 'bamboos-grasses', component: BamboosGrassesComponent },
      { path: 'bougainvilleas', component: BougainvilleasComponent },
      { path: 'bowenia', component: BoweniaComponent },
      { path: 'cactus', component: CactusComponent },
      { path: 'caladium', component: CaladiumComponent },
      { path: 'calatheas', component: CalatheasComponent },
      { path: 'climbers-vines', component: ClimbersVinesComponent },
      { path: 'cordyline', component: CordylineComponent },
      { path: 'costus', component: CostusComponent },
      { path: 'croton', component: CrotonComponent },
      { path: 'crypthanthus', component: CrypthanthusComponent },
      { path: 'cycas', component: CycasComponent },
      { path: 'dracaeana', component: DracaeanaComponent },
      { path: 'encephalartos', component: EncephalartosComponent },
      { path: 'flowers', component: FlowersComponent },
      { path: 'ferns', component: FernsComponent },
      { path: 'ground-covers', component: GroundCoversComponent },
      { path: 'hanging-plants', component: HangingPlantsComponent },
      { path: 'heliconia', component: HeliconiaComponent },
      { path: 'herbs', component: HerbsComponent },
      { path: 'hibiscus', component: HibiscusComponent },
      { path: 'indoor-plants', component: IndoorPlantsComponent },
      { path: 'palms', component: PalmsComponent },
      { path: 'saggo-palms', component: SaggoPalmComponent },
      { path: 'pandanus', component: PandanusComponent },
      { path: 'philodendrons', component: PhilodendronsComponent },
      { path: 'plumerias', component: PlumeriasComponent },
      { path: 'shrubs', component: ShrubsComponent },
      { path: 'strelizia', component: StreliziaComponent },
      { path: 'succulent-plants', component: SucculentPlantsComponent },
      { path: 'trees', component: TreesComponent },
      { path: 'tropical-fruits', component: TropicalFruitsComponent },
      { path: 'zamia-ceratozamia', component: ZamiaCeratozamiaComponent },
      { path: 'other-species', component: OtherSpeciesComponent }

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
      { path: 'ananas', component: AnanasComponent },
      { path: 'aquatic-plants', component: AquaticPlantsComponent },
      { path: 'bamboos-grasses', component: BamboosGrassesComponent },
      { path: 'bougainvilleas', component: BougainvilleasComponent },
      { path: 'bowenia', component: BoweniaComponent },
      { path: 'cactus', component: CactusComponent },
      { path: 'caladium', component: CaladiumComponent },
      { path: 'calatheas', component: CalatheasComponent },
      { path: 'climbers-vines', component: ClimbersVinesComponent },
      { path: 'cordyline', component: CordylineComponent },
      { path: 'costus', component: CostusComponent },
      { path: 'croton', component: CrotonComponent },
      { path: 'crypthanthus', component: CrypthanthusComponent },
      { path: 'cycas', component: CycasComponent },
      { path: 'dracaeana', component: DracaeanaComponent },
      { path: 'encephalartos', component: EncephalartosComponent },
      { path: 'flowers', component: FlowersComponent },
      { path: 'ferns', component: FernsComponent },
      { path: 'ground-covers', component: GroundCoversComponent },
      { path: 'hanging-plants', component: HangingPlantsComponent },
      { path: 'heliconia', component: HeliconiaComponent },
      { path: 'herbs', component: HerbsComponent },
      { path: 'hibiscus', component: HibiscusComponent },
      { path: 'indoor-plants', component: IndoorPlantsComponent },
      { path: 'palms', component: PalmsComponent },
      { path: 'saggo-palms', component: SaggoPalmComponent },
      { path: 'pandanus', component: PandanusComponent },
      { path: 'philodendrons', component: PhilodendronsComponent },
      { path: 'plumerias', component: PlumeriasComponent },
      { path: 'shrubs', component: ShrubsComponent },
      { path: 'strelizia', component: StreliziaComponent },
      { path: 'succulent-plants', component: SucculentPlantsComponent },
      { path: 'trees', component: TreesComponent },
      { path: 'tropical-fruits', component: TropicalFruitsComponent },
      { path: 'zamia-ceratozamia', component: ZamiaCeratozamiaComponent },
      { path: 'other-species', component: OtherSpeciesComponent }
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
