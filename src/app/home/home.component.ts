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
  name: string | undefined;
  email: string | undefined;
  subject: string | undefined;
  message: string | undefined;


  constructor() {}



  ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

  sendEmail() {
    Email.send({
    Host: "smtp.gmail.com",
    Username : "ICDECT2022@gmail.com",
    Password : "@2022AEC",
    To : '19a91a05c2@aec.edu.in',
    // ICDECT2022@aec.edu.in
    From : this.email,
    Subject : this.subject,
    Body :
    ` Name: ${this.name}, \n
      Email: ${this.email}, \n
      Message: ${this.message}.\n
    `
    ,
    }).then(
      message => alert("mail sent successfully")
    );


  }

}



