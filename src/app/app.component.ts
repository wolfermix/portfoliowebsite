import { Component } from '@angular/core';
import {fadeAnimation} from "./fadeInAnimation";
import {Event, NavigationStart, Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent {
  constructor(){

  }
}
