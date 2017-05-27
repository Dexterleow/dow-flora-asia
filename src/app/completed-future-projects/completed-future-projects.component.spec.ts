import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedFutureProjectsComponent } from './completed-future-projects.component';

describe('CompletedFutureProjectsComponent', () => {
  let component: CompletedFutureProjectsComponent;
  let fixture: ComponentFixture<CompletedFutureProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedFutureProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedFutureProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
