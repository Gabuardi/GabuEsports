import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Msi2019Component } from './msi2019.component';

describe('Msi2019Component', () => {
  let component: Msi2019Component;
  let fixture: ComponentFixture<Msi2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Msi2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Msi2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
