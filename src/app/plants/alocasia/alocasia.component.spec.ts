import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlocasiaComponent } from './alocasia.component';

describe('AlocasiaComponent', () => {
  let component: AlocasiaComponent;
  let fixture: ComponentFixture<AlocasiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlocasiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlocasiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
