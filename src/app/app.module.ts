import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { UiModule } from './ui/ui.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FileDropModule } from 'ngx-file-drop';
import { TimeagoModule } from 'ngx-timeago';


import { AppComponent } from './app.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { UploadImageContentComponent } from './components/upload-image-content/upload-image-content.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageCardComponent,
    UploadImageComponent,
    UploadImageContentComponent,
    GalleryComponent,
    HomeComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiModule,
    MatDialogModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    FileDropModule,
    TimeagoModule.forRoot(),
    AppRoutingModule
  ],
  exports: [
    UploadImageComponent,
    HomeComponent
  ],
  entryComponents: [
    UploadImageComponent,
    HomeComponent,
    UploadImageContentComponent,
    ImageSliderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
