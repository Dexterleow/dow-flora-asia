import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangingPlantsComponent } from './hanging-plants.component';

describe('HangingPlantsComponent', () => {
  let component: HangingPlantsComponent;
  let fixture: ComponentFixture<HangingPlantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangingPlantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangingPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
