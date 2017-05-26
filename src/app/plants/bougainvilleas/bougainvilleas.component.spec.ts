import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BougainvilleasComponent } from './bougainvilleas.component';

describe('BougainvilleasComponent', () => {
  let component: BougainvilleasComponent;
  let fixture: ComponentFixture<BougainvilleasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BougainvilleasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BougainvilleasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
