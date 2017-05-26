import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrypthanthusComponent } from './crypthanthus.component';

describe('CrypthanthusComponent', () => {
  let component: CrypthanthusComponent;
  let fixture: ComponentFixture<CrypthanthusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrypthanthusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrypthanthusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
