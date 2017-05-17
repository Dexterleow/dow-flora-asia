import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinggaIslandComponent } from './lingga-island.component';

describe('LinggaIslandComponent', () => {
  let component: LinggaIslandComponent;
  let fixture: ComponentFixture<LinggaIslandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinggaIslandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinggaIslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
