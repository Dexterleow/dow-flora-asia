import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgaveComponent } from './agave.component';

describe('AgaveComponent', () => {
  let component: AgaveComponent;
  let fixture: ComponentFixture<AgaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
