import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  selected: any
  

  constructor() { }

  ngOnInit(): void {
    this.selected = new FormControl(0);
  }

change_tab(){
 
}

}


