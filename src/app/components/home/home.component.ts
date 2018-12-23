import { Component, OnInit } from '@angular/core';
import { Images } from 'src/app/classes/images';
import { ImageData } from 'src/app/classes/image-data';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reloadUI:boolean = false;
  images:ImageData[];


  constructor(public dialog: MatDialog){

  }

  ngOnInit(){
    this.reload("");
  }

  reloadStatus(event:any){
    this.reloadUI = false;
  }

  reload(event:any){
    Images.init();
    this.images = Images.getImages();
    console.log(this.images);
    this.reloadUI = true;
  }

  openSlider(index) {
    ImageSliderComponent.index = index;
    const dialogRef = this.dialog.open(ImageSliderComponent, {width: '800px', height:'600px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
