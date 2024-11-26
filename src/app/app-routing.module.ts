import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { BookingComponent } from "./pages/booking/booking.component";
import { MeetingsComponent } from "./pages/meetings/meetings.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "prefix",
    redirectTo: "home",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "book",
    component: BookingComponent,
  },
  {
    path: "meetings",
    component: MeetingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
