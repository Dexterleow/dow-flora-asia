import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowersPotsVasesEtcComponent } from './flowers-pots-vases-etc.component';

describe('FlowersPotsVasesEtcComponent', () => {
  let component: FlowersPotsVasesEtcComponent;
  let fixture: ComponentFixture<FlowersPotsVasesEtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowersPotsVasesEtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowersPotsVasesEtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
