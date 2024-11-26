import { Component, OnInit } from "@angular/core";
import { BookingService } from "./services/booking.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "infrrd-project";

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit(): void {
    this.bookingService.routeObs.subscribe((route: string) => {
      this.router.navigateByUrl(route);
    });
  }
}
