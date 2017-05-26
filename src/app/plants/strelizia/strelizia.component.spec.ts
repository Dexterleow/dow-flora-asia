import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreliziaComponent } from './strelizia.component';

describe('StreliziaComponent', () => {
  let component: StreliziaComponent;
  let fixture: ComponentFixture<StreliziaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreliziaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreliziaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
