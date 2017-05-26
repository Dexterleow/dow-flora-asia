import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaladiumComponent } from './caladium.component';

describe('CaladiumComponent', () => {
  let component: CaladiumComponent;
  let fixture: ComponentFixture<CaladiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaladiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaladiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
