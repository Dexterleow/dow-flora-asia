import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PandanusComponent } from './pandanus.component';

describe('PandanusComponent', () => {
  let component: PandanusComponent;
  let fixture: ComponentFixture<PandanusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PandanusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PandanusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
