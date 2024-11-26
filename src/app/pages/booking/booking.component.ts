import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { CommonModule } from "@angular/common";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { Router } from "@angular/router";
import { BookingService } from "src/app/services/booking.service";

@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.scss"],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class BookingComponent {
  bookingFormGroup: FormGroup;
  meetingRooms: string[] = [
    "Room 1",
    "Room 2",
    "Room 3",
    "Room 4",
    "Room 5",
    "Room 6",
    "Room 7",
    "Room 8",
    "Room 9",
    "Room 10",
  ];
  isBooked: boolean = false;
  defaultDate: any = new Date();
  fromTimeError: boolean = false;
  toTimeErrorMessage: string = "";
  fromTime: string = "";
  toTime: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private bookingService: BookingService
  ) {
    this.getDefaultTime();
    this.bookingFormGroup = this.formBuilder.group({
      username: ["", Validators.required],
      meetingRoom: ["Room 1", Validators.required],
      date: [this.defaultDate, Validators.required],
      timeFrom: [this.fromTime, Validators.required],
      timeTo: [this.toTime, Validators.required],
      agenda: ["", Validators.required],
    });
  }

  getDefaultTime(): void {
    let time = String(new Date()).split(" ")[4];
    time = time.substring(0, 5);
    this.fromTime = time;
  }

  onFormSubmit() {
    if (this.bookingFormGroup.valid && this.isTimeValid()) {
      this.isBooked = true;
    } else {
      if (!this.isTimeValid()) {
        if (this.bookingFormGroup.controls["timeFrom"].value === "")
          this.fromTimeError = true;
        if (this.bookingFormGroup.controls["timeTo"].value === "")
          this.toTimeErrorMessage = "To time is required";
      }
    }
  }

  isTimeValid(): boolean {
    let fromMin = Number(
      this.bookingFormGroup.controls["timeFrom"].value.split(":")[1]
    );
    let toMin = Number(
      this.bookingFormGroup.controls["timeTo"].value.split(":")[1]
    );
    let fromHour = Number(
      this.bookingFormGroup.controls["timeFrom"].value.split(":")[0]
    );
    let toHour = Number(
      this.bookingFormGroup.controls["timeTo"].value.split(":")[0]
    );
    if (fromHour < 9 || toHour < 9 || fromHour > 18 || toHour > 18) {
      this.toTimeErrorMessage =
        "Meeting timings should be between 09:00 to 18:00";
      return false;
    }
    if (toHour - fromHour < 1 && toMin - fromMin < 30) {
      this.toTimeErrorMessage =
        "Minimum duration of the meeting should be 30 minutes";
      return false;
    }
    this.toTimeErrorMessage = "";
    return true;
  }

  gotoHome() {
    this.router.navigateByUrl("home");
    this.bookingService.changeRoute("home");
  }

  weekendFilter(date: Date): boolean {
    const dayNumber = date?.getDay();
    return dayNumber !== 0 && dayNumber !== 6;
  }
}
