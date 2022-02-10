import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }

  Odata:any;
  Sdata:any;
  Idata:any;
  Ndata:any;
  Tdata:any;

  async ngOnInit(){

    async function data(url: any)
    {
      let response = fetch(url);
      console.log(response);
      let data = (await response).json();
      console.log(data);
      return data
    }

    this.Odata = await data('https://dect-committee.herokuapp.com/organizing');
    this.Tdata = await data('https://dect-committee.herokuapp.com/technical');
    this.Sdata = await data('https://dect-committee.herokuapp.com/steering');
    this.Idata = await data('https://dect-committee.herokuapp.com/international');
    this.Ndata = await data('https://dect-committee.herokuapp.com/national');
  }
}

