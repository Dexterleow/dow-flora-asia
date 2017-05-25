import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AglaonemasComponent } from './aglaonemas.component';

describe('AglaonemasComponent', () => {
  let component: AglaonemasComponent;
  let fixture: ComponentFixture<AglaonemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AglaonemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AglaonemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
