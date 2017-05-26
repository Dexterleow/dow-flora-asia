import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucculentPlantsComponent } from './succulent-plants.component';

describe('SucculentPlantsComponent', () => {
  let component: SucculentPlantsComponent;
  let fixture: ComponentFixture<SucculentPlantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucculentPlantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucculentPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
