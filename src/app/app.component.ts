import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
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
}
