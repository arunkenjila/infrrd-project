import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BookingService {
  routeSub$ = new BehaviorSubject<string>("book");
  routeObs = this.routeSub$.asObservable();

  constructor() {}
  changeRoute(routeName: string) {
    this.routeSub$.next(routeName);
  }
}
