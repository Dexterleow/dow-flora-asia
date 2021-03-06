import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedProjectsComponent } from './completed-projects.component';

describe('CompletedProjectsComponent', () => {
  let component: CompletedProjectsComponent;
  let fixture: ComponentFixture<CompletedProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
