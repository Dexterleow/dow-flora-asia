/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopHeaderLogoSearchContactusComponent } from './top-header--logo--search--contactus.component';

describe('TopHeaderLogoSearchContactusComponent', () => {
  let component: TopHeaderLogoSearchContactusComponent;
  let fixture: ComponentFixture<TopHeaderLogoSearchContactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHeaderLogoSearchContactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeaderLogoSearchContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
