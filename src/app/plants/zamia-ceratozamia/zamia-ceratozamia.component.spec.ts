import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZamiaCeratozamiaComponent } from './zamia-ceratozamia.component';

describe('ZamiaCeratozamiaComponent', () => {
  let component: ZamiaCeratozamiaComponent;
  let fixture: ComponentFixture<ZamiaCeratozamiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZamiaCeratozamiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZamiaCeratozamiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
