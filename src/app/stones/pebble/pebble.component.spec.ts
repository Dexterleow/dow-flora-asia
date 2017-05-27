import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PebbleComponent } from './pebble.component';

describe('PebbleComponent', () => {
  let component: PebbleComponent;
  let fixture: ComponentFixture<PebbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PebbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PebbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
