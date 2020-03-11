import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fruits = [
    "Lemon",
    "Raspberries",
    "Grapefruit",
    "Avocado",
    "Watermelon",
    "Peaches"
  ];
  users: { name: string; title: string }[] = [
    { name: "Carla Espinosa", title: "Nurse" },
    { name: "Bob Kelso", title: "Doctor of Medicine" },
    { name: "Janitor", title: "Janitor" },
    { name: "Perry Cox", title: "Doctor of Medicine" },
    { name: "Ben Sullivan", title: "Carpenter and photographer" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
