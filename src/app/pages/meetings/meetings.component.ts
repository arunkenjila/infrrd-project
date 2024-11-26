import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MeetingCardComponent } from "src/app/components/meeting-card/meeting-card.component";
import { Meeting } from "src/app/model/model";

@Component({
  selector: "app-meetings",
  templateUrl: "./meetings.component.html",
  styleUrls: ["./meetings.component.scss"],
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
    MeetingCardComponent,
  ],
})
export class MeetingsComponent implements OnInit {
  meetingRooms: string[] = [
    "All",
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

  meetingList: Meeting[] = [
    {
      id: "1434",
      username: "Arun Kenjila",
      agenda: "PoC discussion",
      date: "12/11/2023",
      fromTime: "09:12",
      toTime: "12:00",
      meetingRoom: "Room 1",
    },
    {
      id: "54dff",
      username: "Prapthi",
      agenda: "Daily Standup",
      date: "02/03/2024",
      fromTime: "19:12",
      toTime: "12:00",
      meetingRoom: "Room 2",
    },
    {
      id: "143pk",
      username: "Varsha",
      agenda: "Normal",
      date: "12/11/2023",
      fromTime: "09:12",
      toTime: "12:00",
      meetingRoom: "Room 3",
    },
    {
      id: "xjhd",
      username: "Jeevan BJ",
      agenda: "PoC discussion",
      date: "12/11/2023",
      fromTime: "09:12",
      toTime: "12:00",
      meetingRoom: "Room 1",
    },
    {
      id: "wezma",
      username: "Fazil Ahmed",
      agenda: "PoC discussion",
      date: "12/11/2023",
      fromTime: "09:12",
      toTime: "12:00",
      meetingRoom: "Room 7",
    },
    {
      id: "sdk",
      username: "Clarie",
      agenda: "PoC discussion",
      date: "12/11/2023",
      fromTime: "09:12",
      toTime: "12:00",
      meetingRoom: "Room 2",
    },
    {
      id: "pirj",
      username: "Alexa",
      agenda: "PoC discussion",
      date: "12/11/2023",
      fromTime: "09:12",
      toTime: "12:00",
      meetingRoom: "Room 1",
    },
    {
      id: "1434$",
      username: "Zuckerberg",
      agenda: "PoC discussion",
      date: "12/11/2023",
      fromTime: "09:12",
      toTime: "12:00",
      meetingRoom: "Room 9",
    },
    {
      id: "1rttt",
      username: "Steven Smith",
      agenda: "PoC discussion",
      date: "12/11/2023",
      fromTime: "09:12",
      toTime: "12:00",
      meetingRoom: "Room 5",
    },
  ];

  meetingListCopy: Meeting[] = [];

  selectedRoom: string = "All";

  constructor() {}

  ngOnInit(): void {
    this.meetingListCopy = this.meetingList;
  }

  onRoomSelectionChange(meetingRoom: string) {
    this.meetingListCopy = this.meetingList;
    if (meetingRoom !== "All") {
      this.meetingListCopy = this.meetingListCopy.filter(
        (meet: Meeting) => meetingRoom === meet.meetingRoom
      );
    }
  }

  trackByRoomFn(index: number, room: string) {
    return index;
  }

  trackByMeetingFn(index: number, meeting: Meeting) {
    return meeting.id;
  }
  deleteMeet(meetingId: string) {
    if (confirm("Are you sure to delete this meeting?")) {
      this.meetingListCopy = this.meetingListCopy.filter(
        (meet: Meeting) => meetingId !== meet.id
      );

      this.meetingList = this.meetingList.filter(
        (meet: Meeting) => meetingId !== meet.id
      );
    }
  }
}
