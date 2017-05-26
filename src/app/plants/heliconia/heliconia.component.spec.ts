import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeliconiaComponent } from './heliconia.component';

describe('HeliconiaComponent', () => {
  let component: HeliconiaComponent;
  let fixture: ComponentFixture<HeliconiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeliconiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeliconiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
