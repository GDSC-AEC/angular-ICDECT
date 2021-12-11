import { Component, OnInit } from '@angular/core';
import {ParticlesConfig} from './particles-config';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.invokeParticles();
    particlesJS.load('particles-js', 'particles.json', null);
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }


}
