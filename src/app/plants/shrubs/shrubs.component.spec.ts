import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrubsComponent } from './shrubs.component';

describe('ShrubsComponent', () => {
  let component: ShrubsComponent;
  let fixture: ComponentFixture<ShrubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShrubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
