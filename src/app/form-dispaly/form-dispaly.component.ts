import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';
import { Repo } from '../repository-class/repository'
import { UserService } from '../user-http/user.service';


@Component({
  selector: 'app-form-dispaly',
  templateUrl: './form-dispaly.component.html',
  styleUrls: ['./form-dispaly.component.css']
})
export class FormDispalyComponent implements OnInit {
  Users!: User;
  Repos:Repo[]=[]
  constructor(public userHttpService:UserService) {

  }

  ngOnInit() {
    this.searchGit("annechege")
 }
searchGit(searchTerm: string){
  this.userHttpService.searchGits(searchTerm).then(
    (success)=>{
      this.Users = this.userHttpService.Users;
    },
    (error)=>{
      console.log(error)
    })
    this.userHttpService.searchRepos(searchTerm).then(
            (success)=>{
            this.Repos=this.userHttpService.Repos



    })
  }
}
