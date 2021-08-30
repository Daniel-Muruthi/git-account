import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {


  @Input() users !: any[]

  constructor() { }

  ngOnInit(): void {
  }

}
