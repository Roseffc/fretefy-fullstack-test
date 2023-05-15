/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeletorCidadesComponent } from './seletor-cidades.component';

describe('SeletorCidadesComponent', () => {
  let component: SeletorCidadesComponent;
  let fixture: ComponentFixture<SeletorCidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeletorCidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeletorCidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
