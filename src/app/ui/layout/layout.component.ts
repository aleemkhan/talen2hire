import { Component, OnInit, Input, Output } from '@angular/core';
import { ImageData } from 'src/app/classes/image-data';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  @Input() images:ImageData[];
  constructor() { }

  tiles: Tile[] = [
    {text: 'One', cols: 12, rows: 1, color: 'lightpink'}
  ];

  ngOnInit() {
  }

}
