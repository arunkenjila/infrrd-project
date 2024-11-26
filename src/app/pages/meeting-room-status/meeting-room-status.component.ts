import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

interface TimeSlot {
  fromTime: string;
  toTime: string;
}

interface Room {
  room: string;
  timeSlot: TimeSlot[];
}

interface RoomStatus {
  room: string;
  status: string;
}

@Component({
  selector: "app-meeting-room-status",
  templateUrl: "./meeting-room-status.component.html",
  styleUrls: ["./meeting-room-status.component.scss"],
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
export class MeetingRoomStatusComponent implements OnInit {
  rooms: Room[] = [
    {
      room: "Room 1",
      timeSlot: [
        {
          fromTime: "12:30",
          toTime: "13:30",
        },
        {
          fromTime: "09:15",
          toTime: "10:15",
        },
      ],
    },
    {
      room: "Room 2",
      timeSlot: [
        {
          fromTime: "11:30",
          toTime: "13:30",
        },
        {
          fromTime: "16:00",
          toTime: "17:00",
        },
      ],
    },
    {
      room: "Room 3",
      timeSlot: [
        {
          fromTime: "14:10",
          toTime: "14:40",
        },
        {
          fromTime: "17:10",
          toTime: "18:00",
        },
      ],
    },
    {
      room: "Room 4",
      timeSlot: [
        {
          fromTime: "11:00",
          toTime: "13:30",
        },
        {
          fromTime: "10:00",
          toTime: "11:30",
        },
      ],
    },
    {
      room: "Room 5",
      timeSlot: [
        {
          fromTime: "12:15",
          toTime: "13:00",
        },
        {
          fromTime: "12:45",
          toTime: "14:00",
        },
      ],
    },
    {
      room: "Room 6",
      timeSlot: [
        {
          fromTime: "12:30",
          toTime: "13:30",
        },
        {
          fromTime: "10:30",
          toTime: "13:30",
        },
      ],
    },
    {
      room: "Room 7",
      timeSlot: [
        {
          fromTime: "09:45",
          toTime: "10:50",
        },
      ],
    },
    {
      room: "Room 8",
      timeSlot: [
        {
          fromTime: "15:30",
          toTime: "16:00",
        },
        {
          fromTime: "16:00",
          toTime: "17:00",
        },
      ],
    },
    {
      room: "Room 9",
      timeSlot: [
        {
          fromTime: "12:30",
          toTime: "13:30",
        },
        {
          fromTime: "13:00",
          toTime: "13:50",
        },
      ],
    },
    {
      room: "Room 10",
      timeSlot: [
        {
          fromTime: "12:30",
          toTime: "13:30",
        },
      ],
    },
  ];

  roomStatusList: RoomStatus[] = [
    {
      room: "Room 1",
      status: "Available",
    },
    {
      room: "Room 2",
      status: "Available",
    },
    {
      room: "Room 3",
      status: "Available",
    },
    {
      room: "Room 4",
      status: "Available",
    },
    {
      room: "Room 5",
      status: "Available",
    },
    {
      room: "Room 6",
      status: "Available",
    },
    {
      room: "Room 7",
      status: "Available",
    },
    {
      room: "Room 8",
      status: "Available",
    },
    {
      room: "Room 9",
      status: "Available",
    },
    {
      room: "Room 10",
      status: "Available",
    },
  ];

  fromTime: string = "";
  toTime: string = "";
  errorMessage: string = "";

  constructor() {}

  ngOnInit(): void {}

  showStatus() {
    if (!this.fromTime) {
      this.errorMessage = "Please select the From time";
    }

    if (!this.toTime) {
      this.errorMessage = "Please select the To time";
    }
    if (this.toTime && this.fromTime) {
      this.errorMessage = "";
      this.checkRoomStatus();
    }
  }

  checkRoomStatus() {
    let fromHour = Number(this.fromTime.split(":")[0]);
    this.roomStatusList.forEach((roomStatus: RoomStatus) => {
      for (let i = 0; i < this.rooms.length; i++) {
        if (roomStatus.room === this.rooms[i].room) {
          let timeSlotList = this.rooms[i].timeSlot;
          for (let j = 0; j < timeSlotList.length; j++) {
            let roomFromHour = Number(timeSlotList[j].fromTime.split(":")[0]);
            let roomToHour = Number(timeSlotList[j].toTime.split(":")[0]);
            if (fromHour >= roomFromHour && fromHour <= roomToHour) {
              roomStatus.status = "Booked";
              break;
            }
          }
        }
      }
    });
  }

  trackByFn(index: number, room: RoomStatus) {
    return room.room;
  }
}
