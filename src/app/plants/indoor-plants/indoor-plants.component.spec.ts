import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorPlantsComponent } from './indoor-plants.component';

describe('IndoorPlantsComponent', () => {
  let component: IndoorPlantsComponent;
  let fixture: ComponentFixture<IndoorPlantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndoorPlantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndoorPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
