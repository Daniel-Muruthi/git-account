import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent implements OnInit {

  username=""
  identity=""

  constructor() { }

  ngOnInit(): void {
  }
  gitName(event: Event){
    this.username=(<HTMLInputElement>event.target).value
  }
  nameOutput(){
    this.identity= `Your github username is : ${this.username}`
  }

}
