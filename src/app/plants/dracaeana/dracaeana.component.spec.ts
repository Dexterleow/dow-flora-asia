import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DracaeanaComponent } from './dracaeana.component';

describe('DracaeanaComponent', () => {
  let component: DracaeanaComponent;
  let fixture: ComponentFixture<DracaeanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DracaeanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DracaeanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
