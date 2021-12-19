import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Scroll } from '@angular/router';
import { routeTransitionAnimations } from './router-transition-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimations]
})
export class AppComponent implements OnInit{
  title = 'ICDECT 2022';
  showFiller = false;
  ngOnInit() {
    

    
    let target = $('.NavBar');
    let width = screen.width;
    let gap = $('.gap');
    let navHide = $('.hide');
    function delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    $(window).scroll(function (e) {
      if ($(this).scrollTop()! > 100) {
          target.css({
            "background-color": "rgba(0, 0, 0, 0.774)"
          })
      }
      else {
  
          target.css({ "background-color": "rgba(0, 0, 0, 0.105)" })
      }
    });



  }

  

  onActivate(event:any) {
    window.scroll(0,0);
}



}


