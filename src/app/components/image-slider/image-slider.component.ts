import { Component, OnInit } from '@angular/core';
import { ImageData } from 'src/app/classes/image-data';
import { Images } from 'src/app/classes/images';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  public static index = 0;
  public images:ImageData[];
  public image:number = 0;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.image = ImageSliderComponent.index;
    this.images = Images.getImages();
  }

  previousImage(){
    this.image--;
    if(this.image < 0){
      this.image = this.images.length - 1;
    }
  }

  nextImage(){
    this.image++;
    if(this.image >= this.images.length){
      this.image = 0;
    }
  }

  deleteImage(index){
    Images.removeImage(index);
    this.dialog.closeAll();
  }

}
