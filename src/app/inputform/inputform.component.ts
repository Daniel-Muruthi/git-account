import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { GetgitaccountService } from '../getgitaccount.service';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent {
  identityGit: any=""
  originalGit=''
  buttonstatus=false;
  username=''
  identity=""
  jina=false;
  // repeats: string[]=[]
  gitresult=""
  gitIdentityName: any
  gitImg: any='';
  gitLocation: any
  gitRepo: string=''
  repoName= ''

  users: string[]=[]

  // accountShown: string[]=[]

  

  constructor(private getgitaccount: GetgitaccountService) {
    //importing from our service class
    

    // This set an enable timeout for button toggle status
    // setTimeout(()=>{
    //   this.buttonstatus=true;
    // },3000);
  }

  gitProfile(){
    // this.getgitaccount.gitData().subscribe((data)=>{
    //   this.users = data
    //   console.log(data)
    // })

    this.originalGit=(this.username).split(" ").join("")
    this.identityGit =fetch(`https://api.github.com/users/${this.originalGit}`).then((result)=>result.json()).then((data)=>{
      this.users = data
      this.gitImg= data.avatar_url
      this.gitLocation= data.location
      
      this.gitIdentityName = JSON.stringify(data.login)
      this.repoName=(this.gitIdentityName).replace(/['"]+/g, '')
      this.gitRepo= `https://github.com/${this.repoName}?tab=repositories`

      this.gitImg = JSON.parse(data.avatar_url)
      // this.gitRepo= JSON.parse(data.repos_url)
    
    })
  }
  gitName(event: Event){
    this.username=(<HTMLInputElement>event.target).value
  }

  nameOutput(){
    this.jina=true;
    // this.repeats.push(this.username)
    this.identity= `Click The Display Button Below To Search For The Account : ${this.username}`
    // this.originalGit=(this.username).split(" ").join("")
    // this.identityGit =fetch(`https://api.github.com/users/${this.originalGit}`).then((result)=>result.json()).then((data)=>{
    //   this.accountShown=data
    // })
  }

  

}
