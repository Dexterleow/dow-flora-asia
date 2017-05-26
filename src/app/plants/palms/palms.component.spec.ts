import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmsComponent } from './palms.component';

describe('PalmsComponent', () => {
  let component: PalmsComponent;
  let fixture: ComponentFixture<PalmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
