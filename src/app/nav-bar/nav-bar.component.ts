import { Component, OnInit } from '@angular/core';
import {Router, Event, NavigationStart, NavigationEnd} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, private loadingSpinner: NgxSpinnerService) { }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
        if(event instanceof NavigationStart){
        }
      //when finish navigation, set the margin for those non-index-page
        if(event instanceof NavigationEnd){
          if((event.url != "/index") && (event.url != "/")){
            document.getElementById("navContainer").classList.add("absoluteNav");
            document.getElementById("non-index-container").style.marginTop = document.getElementById("navContainer").offsetHeight + 'px';

          } else {
            document.getElementById("navContainer").classList.remove("absoluteNav");
          }
          //scroll back to top
          window.scrollTo(0,0);
          console.log(event.url)
        }
    })
  }

}
