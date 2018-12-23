import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { ImageData } from '../../classes/image-data';
import { Images } from '../../classes/images';

@Component({
  selector: 'app-upload-image-content',
  templateUrl: './upload-image-content.component.html',
  styleUrls: ['./upload-image-content.component.css']
})
export class UploadImageContentComponent implements OnInit{

  public files: UploadFile[] = [];
  public base64: string[] = [];
  public details: any[] = [];

  constructor(){}

  ngOnInit(){
    Images.init();
  }
  
  public dropped(event: UploadEvent) {
    this.files = event.files;
    this.base64 = [];
    for (const droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.details.push(file);
          if(file.type == 'image/png' || file.type == 'image/jpeg'){
            var myReader:FileReader = new FileReader();
            myReader.onloadend = (e) => {
              let base64String = myReader.result.toString();
              this.base64.push(base64String);
            }
            myReader.readAsDataURL(file);
          }
        });
      }
    }
  }
 
  public fileOver(event){
    //console.log(event);
  }
 
  public fileLeave(event){
    //console.log(event);
  }

  saveImages(){
    console.log(this.base64);
    console.log(this.details);
    for(let i=0; i<this.base64.length; i++){
      let data = {name: this.files[i].fileEntry.name, base64:this.base64[i], added_at:new Date(), liked:false};
      let image = new ImageData(data);
      Images.addImage(image);
    }
  }

}
