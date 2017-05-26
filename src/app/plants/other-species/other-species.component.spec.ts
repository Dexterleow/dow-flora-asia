import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSpeciesComponent } from './other-species.component';

describe('OtherSpeciesComponent', () => {
  let component: OtherSpeciesComponent;
  let fixture: ComponentFixture<OtherSpeciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherSpeciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
