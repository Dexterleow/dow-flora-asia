import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TropicalFruitsComponent } from './tropical-fruits.component';

describe('TropicalFruitsComponent', () => {
  let component: TropicalFruitsComponent;
  let fixture: ComponentFixture<TropicalFruitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TropicalFruitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TropicalFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
