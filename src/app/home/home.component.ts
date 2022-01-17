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
  test(){
    console.log(this.name);
  }
  async sendEmail() {

    let success_message = $('.sent-message');
    let form = $('.php-email-form');
    let loading = $('.loading');

    async function woohoo() {
      let audio = new Audio();
      audio.src = "assets/sounds/03_principle_informative-02.mp3";
      audio.load();
      audio.play();
    }

    if(this.name != undefined && this.email != undefined && this.subject != undefined && this.message != undefined){
      loading.css({
        "content": "",
        "display": "block",
        "border-radius": "50%",
        "width": "24px",
        "height": "24px",
        "margin": "0 10px -6px 0",
        "border": "3px solid #18d26e",
        "border-top-color": "#eee",
        "-webkit-animation": "animate-loading 1s linear infinite",
        "animation": "animate-loading 1s linear infinite"
        })

        Email.send({
          Host: "smtp.gmail.com",
          Username : "ICDECT2022@gmail.com",
          Password : "@2022AEC",
          To : 'ICDECT2022@aec.edu.in', // Production
          // To : '19a91a05c2@aec.edu.in', // Development
          From : this.email,
          Subject : this.subject,
          Body :
          ` Name: ${this.name}, \n
            Email: ${this.email}, \n
            Message: ${this.message}.\n
          `
          }).then(

            async function dingdong() {
              loading.css({
                "display": "none"
              })
              woohoo();
              success_message.css({
                "display": "block"
              })
              form.trigger("reset");


            }
          )

        }
        else{
          alert('Something is missing.\nPlease Make Sure Nothing is Empty.');
        }






  }

}



