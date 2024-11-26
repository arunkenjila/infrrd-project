import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: true,
  imports: [MatButtonModule],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}