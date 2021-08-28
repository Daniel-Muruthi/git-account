import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent implements OnInit {

  buttonstatus=false;
  username=""
  identity=""

  constructor() {
    setTimeout(()=>{
      this.buttonstatus=true;
    },3000);
  }

  ngOnInit(): void {
  }
  gitName(event: Event){
    this.username=(<HTMLInputElement>event.target).value
  }

  nameOutput(){
    this.identity= `Your github username is : ${this.username}`
  }

}
