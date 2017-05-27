import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoneTableComponent } from './stone-table.component';

describe('StoneTableComponent', () => {
  let component: StoneTableComponent;
  let fixture: ComponentFixture<StoneTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoneTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoneTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
