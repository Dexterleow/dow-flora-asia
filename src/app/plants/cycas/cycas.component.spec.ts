import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycasComponent } from './cycas.component';

describe('CycasComponent', () => {
  let component: CycasComponent;
  let fixture: ComponentFixture<CycasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
