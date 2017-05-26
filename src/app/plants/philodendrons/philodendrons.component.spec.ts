import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilodendronsComponent } from './philodendrons.component';

describe('PhilodendronsComponent', () => {
  let component: PhilodendronsComponent;
  let fixture: ComponentFixture<PhilodendronsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhilodendronsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhilodendronsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
