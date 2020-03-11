import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styles: [
    `
      ::ng-deep nb-layout-column {
        justify-content: center;
        display: flex;
      }
      nb-chat {
        width: 500px;
      }
    `
  ]
})
export class ChatComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
