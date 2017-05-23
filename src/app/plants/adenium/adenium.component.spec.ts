import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdeniumComponent } from './adenium.component';

describe('AdeniumComponent', () => {
  let component: AdeniumComponent;
  let fixture: ComponentFixture<AdeniumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdeniumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdeniumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
