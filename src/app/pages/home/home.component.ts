import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { Router } from "@angular/router";
import { BookingService } from "src/app/services/booking.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: true,
  imports: [MatButtonModule],
})
export class HomeComponent {
  constructor(private router: Router, private bookingService: BookingService) {}

  gotoBooking() {
    this.router.navigateByUrl("book");
    this.bookingService.changeRoute("book");
  }
}
