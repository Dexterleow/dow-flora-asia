import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncephalartosComponent } from './encephalartos.component';

describe('EncephalartosComponent', () => {
  let component: EncephalartosComponent;
  let fixture: ComponentFixture<EncephalartosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncephalartosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncephalartosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
