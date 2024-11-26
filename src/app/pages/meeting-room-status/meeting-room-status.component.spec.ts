import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingRoomStatusComponent } from './meeting-room-status.component';

describe('MeetingRoomStatusComponent', () => {
  let component: MeetingRoomStatusComponent;
  let fixture: ComponentFixture<MeetingRoomStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingRoomStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingRoomStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
