import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordylineComponent } from './cordyline.component';

describe('CordylineComponent', () => {
  let component: CordylineComponent;
  let fixture: ComponentFixture<CordylineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordylineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
