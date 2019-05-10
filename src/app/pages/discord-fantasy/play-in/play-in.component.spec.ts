import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayInComponent } from './play-in.component';

describe('PlayInComponent', () => {
  let component: PlayInComponent;
  let fixture: ComponentFixture<PlayInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
