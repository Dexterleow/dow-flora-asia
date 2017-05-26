import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundCoversComponent } from './ground-covers.component';

describe('GroundCoversComponent', () => {
  let component: GroundCoversComponent;
  let fixture: ComponentFixture<GroundCoversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroundCoversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundCoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
