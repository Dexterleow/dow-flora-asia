import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HibiscusComponent } from './hibiscus.component';

describe('HibiscusComponent', () => {
  let component: HibiscusComponent;
  let fixture: ComponentFixture<HibiscusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HibiscusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HibiscusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
