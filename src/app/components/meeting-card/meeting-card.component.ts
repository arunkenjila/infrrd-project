import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { Meeting } from "src/app/model/model";

@Component({
  selector: "app-meeting-card",
  templateUrl: "./meeting-card.component.html",
  styleUrls: ["./meeting-card.component.scss"],
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
  ],
})
export class MeetingCardComponent implements OnInit {
  @Input() username: string;
  @Input() agenda: string;
  @Input() fromTime: string;
  @Input() toTime: string;
  @Input() date: string;
  @Input() id: string;

  @Output() deleteMeeting = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  deleteMeet(meetingId: string) {
    this.deleteMeeting.emit(meetingId);
  }
}
