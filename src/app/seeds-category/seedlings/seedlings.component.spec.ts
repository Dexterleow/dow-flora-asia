import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedlingsComponent } from './seedlings.component';

describe('SeedlingsComponent', () => {
  let component: SeedlingsComponent;
  let fixture: ComponentFixture<SeedlingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeedlingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedlingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
