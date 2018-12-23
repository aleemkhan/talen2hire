import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Images } from 'src/app/classes/images';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public params: any;
  public pageSize = 12;
  @Input() public images:ImageData[];
  @Output() public slider = new EventEmitter();
  constructor(public router:ActivatedRoute) { 
    this.router.params.subscribe( params => this.params = params);
  }

  ngOnInit() {
  }

  openSlider(index:any){
    this.slider.emit(index);
  }

}
