import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalatheasComponent } from './calatheas.component';

describe('CalatheasComponent', () => {
  let component: CalatheasComponent;
  let fixture: ComponentFixture<CalatheasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalatheasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalatheasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
