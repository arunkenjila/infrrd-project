import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { BookingComponent } from "./booking.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { By } from "@angular/platform-browser";

describe("BookingComponent", () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  let isBooked: boolean = false;
  let defaultDate: any = new Date();
  let fromTimeError: boolean = false;
  let toTimeErrorMessage: string = "";
  let fromTime: string = "";
  let toTime: string = "";

  let username: any;
  let meetingRoom: any;
  let date: any;
  let timeFrom: any;
  let timeTo: any;
  let agenda: any;
  let submitButton: any;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    isBooked = component.isBooked;
    defaultDate = component.defaultDate;
    fromTimeError = component.fromTimeError;
    toTimeErrorMessage = component.toTimeErrorMessage;
    fromTime = component.fromTime;
    toTime = component.toTime;
    username = component.bookingFormGroup.controls["username"];
    meetingRoom = component.bookingFormGroup.controls["meetingRoom"];
    date = component.bookingFormGroup.controls["date"];
    timeFrom = component.bookingFormGroup.controls["timeFrom"];
    timeTo = component.bookingFormGroup.controls["timeTo"];
    agenda = component.bookingFormGroup.controls["agenda"];
    submitButton = fixture.debugElement.query(By.css("button"));
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("form validation- initial status should be invalid", () => {
    expect(component.bookingFormGroup.status).toBe("INVALID");
  });

  it("form validation- user name", () => {
    username.setValue("");
    expect(
      component.bookingFormGroup.controls["username"].invalid
    ).toBeTruthy();
    username.setValue("Arun Kenjila");
    expect(component.bookingFormGroup.controls["username"].invalid).toBeFalsy();
  });

  it("form validation- agenda", () => {
    agenda.setValue("");
    expect(component.bookingFormGroup.controls["agenda"].invalid).toBeTruthy();
    agenda.setValue("Arun Kenjila");
    expect(component.bookingFormGroup.controls["agenda"].invalid).toBeFalsy();
  });

  it("form validation- time error message 1", () => {
    setDefaultValues();
    fixture.detectChanges();
    timeTo.setValue("12:00");
    component.onFormSubmit();
    fixture.detectChanges();
    expect(component.toTimeErrorMessage).toBe(
      "Minimum duration of the meeting should be 30 minutes"
    );
  });

  it("form validation- time error message 2", () => {
    setDefaultValues();
    fixture.detectChanges();
    timeTo.setValue("");
    component.onFormSubmit();
    fixture.detectChanges();
    expect(component.toTimeErrorMessage).toBe("To time is required");
  });

  it("form validation- time error message 3", () => {
    setDefaultValues();
    fixture.detectChanges();
    timeTo.setValue("19:00");
    component.onFormSubmit();
    fixture.detectChanges();
    expect(component.toTimeErrorMessage).toBe(
      "Meeting timings should be between 09:00 to 18:00"
    );
  });

  it("form submition- 1", () => {
    setDefaultValues();
    fixture.detectChanges();
    component.onFormSubmit();
    fixture.detectChanges();
    expect(component.bookingFormGroup.status).toEqual("VALID");
  });

  function setDefaultValues() {
    username.setValue("Arun Kenjila");
    agenda.setValue("This is agenda");
    date.setValue(new Date());
    timeFrom.setValue("15:03");
    timeTo.setValue("14:00");
  }
});
