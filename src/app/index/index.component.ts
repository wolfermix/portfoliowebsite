import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})


export class IndexComponent implements OnInit {

  public isFinishLoading: boolean;

  constructor(private loadingSpinner: NgxSpinnerService) {
    this.isFinishLoading = false;
  }

  ngOnInit() {
    this.loadingSpinner.show();

    setTimeout(()=>{
      this.loadingSpinner.hide();
      this.isFinishLoading = true;
    }, 1000);
  }

}
