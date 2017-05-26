import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostusComponent } from './costus.component';

describe('CostusComponent', () => {
  let component: CostusComponent;
  let fixture: ComponentFixture<CostusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
