import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbersVinesComponent } from './climbers-vines.component';

describe('ClimbersVinesComponent', () => {
  let component: ClimbersVinesComponent;
  let fixture: ComponentFixture<ClimbersVinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimbersVinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbersVinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
