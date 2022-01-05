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

     // http://localhost:4200/about#institute
     let url = window.location.href;
     let about_section = document.getElementById("about")

     if(url.includes('0')){
       about_section?.scrollIntoView(true)
       this.selected = new FormControl(0);
     }
     if(url.includes('2')){
      about_section?.scrollIntoView(true)
       this.selected = new FormControl(2);
     }
     if(url.includes('1')){
      about_section?.scrollIntoView(true)
       this.selected = new FormControl(1);
     }


  }

change_tab(){
 
}

}


