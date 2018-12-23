import { Component, OnInit, Input } from '@angular/core';
import {PageEvent} from '@angular/material';
import { ImageData } from 'src/app/classes/image-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() images:ImageData[];
  pageSize = 12;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  constructor(public router:Router) { 
  }

  ngOnInit() {

  }

  public goToPage(event){
    this.pageEvent = event;
    console.log(this.pageEvent.pageIndex);
    this.router.navigate(["/"+(this.pageEvent.pageIndex + 1)]);
  }

}
