import { Component, OnInit } from '@angular/core';
import {ParticlesConfig} from './particles-config';
import {Email} from '../../assets/js/smtp';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor() {}
    
 

  ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

  public sendEmail() {
    
    Email.send({
    Host: "smtp.gmail.com",
    Username : "<sender’s email address>",
    Password : "<email password>",
    To : '<recipient’s email address>',
    From : "<sender’s email address>",
    Subject : "<email subject>",
    Body : "<email body>",
    }).then(
      // message => alert("mail sent successfully")
    
    );
  }

}



