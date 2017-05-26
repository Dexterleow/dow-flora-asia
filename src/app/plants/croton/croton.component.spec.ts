import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrotonComponent } from './croton.component';

describe('CrotonComponent', () => {
  let component: CrotonComponent;
  let fixture: ComponentFixture<CrotonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrotonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
