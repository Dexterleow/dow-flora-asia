import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BamboosGrassesComponent } from './bamboos-grasses.component';

describe('BamboosGrassesComponent', () => {
  let component: BamboosGrassesComponent;
  let fixture: ComponentFixture<BamboosGrassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BamboosGrassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BamboosGrassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
