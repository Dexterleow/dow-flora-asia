import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaggoPalmComponent } from './saggo-palm.component';

describe('SaggoPalmComponent', () => {
  let component: SaggoPalmComponent;
  let fixture: ComponentFixture<SaggoPalmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaggoPalmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaggoPalmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
