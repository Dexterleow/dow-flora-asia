import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AquaticPlantsComponent } from './aquatic-plants.component';

describe('AquaticPlantsComponent', () => {
  let component: AquaticPlantsComponent;
  let fixture: ComponentFixture<AquaticPlantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AquaticPlantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AquaticPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
