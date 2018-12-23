import {Component, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { UploadImageContentComponent } from '../upload-image-content/upload-image-content.component';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  @Output() reload = new EventEmitter();
  constructor(public dialog: MatDialog) {}
  ngOnInit() {

  }
  openDialog() {
    const dialogRef = this.dialog.open(UploadImageContentComponent, {width: '600px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.reload.emit(null);
    });
  }
}
