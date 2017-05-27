import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCharcoalsComponent } from './media-charcoals.component';

describe('MediaCharcoalsComponent', () => {
  let component: MediaCharcoalsComponent;
  let fixture: ComponentFixture<MediaCharcoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaCharcoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaCharcoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
