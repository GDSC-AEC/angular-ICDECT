import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  selected: any
  

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      let url = window.location.href;
      if (url.includes('/0')){
        this.selected = new FormControl(0);
      }
      if (url.includes('/1')){
        this.selected = new FormControl(1);
      }
      if (url.includes('/2')){
        this.selected = new FormControl(2);
      }
    });
  }


  ngOnInit(): void {
    
  }

  public change():void {
    let url = window.location.href;
    if (url.includes('/0')){
      this.selected = new FormControl(0);
    }
    if (url.includes('/1')){
      this.selected = new FormControl(1);
    }
    if (url.includes('/2')){
      this.selected = new FormControl(2);
    }
    
  }

change_tab(){
 
}

}


