import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FernsComponent } from './ferns.component';

describe('FernsComponent', () => {
  let component: FernsComponent;
  let fixture: ComponentFixture<FernsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FernsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FernsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
