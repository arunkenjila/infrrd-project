import { Component, OnInit } from "@angular/core";
import { BookingService } from "src/app/services/booking.service";

interface Menu {
  label: string;
  route: string;
  isActive: boolean;
}

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  menu: Menu[] = [
    {
      label: "Home",
      route: "home",
      isActive: true,
    },
    {
      label: "Book",
      route: "book",
      isActive: false,
    },
    {
      label: "Meetings",
      route: "meetings",
      isActive: false,
    },
    {
      label: "Room Status",
      route: "status",
      isActive: false,
    },
  ];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingService.routeObs.subscribe((currentRoute: string) => {
      for (let i = 0; i < this.menu.length; i++) {
        if (currentRoute === this.menu[i].route) {
          this.menu[i].isActive = true;
        } else this.menu[i].isActive = false;
      }
    });
  }

  trackByFn(index: number, item: Menu) {
    return index;
  }

  onClickMenu(item: Menu) {
    for (let i = 0; i < this.menu.length; i++) {
      if (item.label === this.menu[i].label) {
        this.menu[i].isActive = true;
        this.bookingService.changeRoute(item.route);
      } else this.menu[i].isActive = false;
    }
  }
}
