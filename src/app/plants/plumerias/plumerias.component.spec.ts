import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumeriasComponent } from './plumerias.component';

describe('PlumeriasComponent', () => {
  let component: PlumeriasComponent;
  let fixture: ComponentFixture<PlumeriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlumeriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlumeriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
