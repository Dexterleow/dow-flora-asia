import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationCapabilityComponent } from './operation-capability.component';

describe('OperationCapabilityComponent', () => {
  let component: OperationCapabilityComponent;
  let fixture: ComponentFixture<OperationCapabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationCapabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationCapabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
