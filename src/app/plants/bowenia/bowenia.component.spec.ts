import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoweniaComponent } from './bowenia.component';

describe('BoweniaComponent', () => {
  let component: BoweniaComponent;
  let fixture: ComponentFixture<BoweniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoweniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoweniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
