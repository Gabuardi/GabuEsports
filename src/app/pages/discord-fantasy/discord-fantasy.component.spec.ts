import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordFantasyComponent } from './discord-fantasy.component';

describe('DiscordFantasyComponent', () => {
  let component: DiscordFantasyComponent;
  let fixture: ComponentFixture<DiscordFantasyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscordFantasyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscordFantasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
