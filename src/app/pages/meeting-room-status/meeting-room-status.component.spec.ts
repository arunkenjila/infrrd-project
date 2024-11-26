import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MeetingRoomStatusComponent } from "./meeting-room-status.component";
import { By } from "@angular/platform-browser";

describe("MeetingRoomStatusComponent", () => {
  let component: MeetingRoomStatusComponent;
  let fixture: ComponentFixture<MeetingRoomStatusComponent>;
  let submitButton: any;

  beforeEach(async () => {
    fixture = TestBed.createComponent(MeetingRoomStatusComponent);
    component = fixture.componentInstance;
    submitButton = fixture.debugElement.query(By.css("button"));
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("error message - from time", () => {
    component.fromTime = "";
    submitButton.nativeElement.click();
    fixture.detectChanges();
    expect(component.errorMessage).toBe("Please select the From time");
  });

  it("error message - to time", () => {
    component.fromTime = "15:30";
    component.toTime = "";
    submitButton.nativeElement.click();
    fixture.detectChanges();
    expect(component.errorMessage).toBe("Please select the To time");
  });
});
