import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "prefix",
    redirectTo: "home",
  },
  {
    path: "home",
    loadComponent: () =>
      import("./pages/home/home.component").then((x) => x.HomeComponent),
  },
  {
    path: "book",
    loadComponent: () =>
      import("./pages/booking/booking.component").then(
        (x) => x.BookingComponent
      ),
  },
  {
    path: "meetings",
    loadComponent: () =>
      import("./pages/meetings/meetings.component").then(
        (x) => x.MeetingsComponent
      ),
  },
  {
    path: "status",
    loadComponent: () =>
      import("./pages/meeting-room-status/meeting-room-status.component").then(
        (x) => x.MeetingRoomStatusComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
