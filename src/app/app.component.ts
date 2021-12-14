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

  ngOnInit() {
    let target = $('.NavBar');
    let gap = $('.gap');
    let spacer = $('.spacer');
    let navhide = $('.navhide');
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
        navhide.css({
          "display": "none"
        }),
          target.css({ "background-color": "rgba(0, 0, 0, 0.105)" })
      }
    });
  }



}