import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatedMediaComponent } from './treated-media.component';

describe('TreatedMediaComponent', () => {
  let component: TreatedMediaComponent;
  let fixture: ComponentFixture<TreatedMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatedMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatedMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
