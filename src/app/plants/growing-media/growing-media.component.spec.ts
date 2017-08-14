import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowingMediaComponent } from './growing-media.component';

describe('GrowingMediaComponent', () => {
  let component: GrowingMediaComponent;
  let fixture: ComponentFixture<GrowingMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowingMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowingMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
