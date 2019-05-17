import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnockoutsComponent } from './knockouts.component';

describe('KnockoutsComponent', () => {
  let component: KnockoutsComponent;
  let fixture: ComponentFixture<KnockoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnockoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnockoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
