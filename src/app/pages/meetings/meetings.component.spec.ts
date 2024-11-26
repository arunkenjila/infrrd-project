import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { MeetingsComponent } from "./meetings.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { By } from "@angular/platform-browser";

describe("MeetingsComponent", () => {
  let component: MeetingsComponent;
  let fixture: ComponentFixture<MeetingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(MeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("default room should be 'ALL'", () => {
    expect(component.selectedRoom).toBe("All");
  });

  it("selected room is 'Room 1'", () => {
    component.selectedRoom = "Room 1";
    component.onRoomSelectionChange(component.selectedRoom);
    fixture.detectChanges();
    expect(component.meetingListCopy.length).toBe(3);
  });

  it("selected room is 'Room 9'", () => {
    component.selectedRoom = "Room 9";
    component.onRoomSelectionChange(component.selectedRoom);
    fixture.detectChanges();
    expect(component.meetingListCopy.length).toBe(1);
  });

  it("selected room is 'Room 10'", () => {
    component.selectedRoom = "Room 10";
    component.onRoomSelectionChange(component.selectedRoom);
    fixture.detectChanges();
    expect(component.meetingListCopy.length).toBe(0);
    let message = fixture.debugElement.query(By.css(".no-meeting"));
    expect(message.nativeElement.innerText).toBe("No Meetings found");
  });
});
