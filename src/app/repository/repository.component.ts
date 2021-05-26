import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
import {ReposService} from '../repos-http/repos.service'
import { Repo } from '../repository-class/repository'
import { UserService } from '../user-http/user.service';
import { User } from '../user-class/user';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  providers: [ReposService],
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  Users!: User;
  Repos:Repo[]=[]
  constructor(public userHttpService:UserService) {

  }

  ngOnInit() {
    this.searchGit("annechege")
 }
searchGit(searchTerm: string){
  this.userHttpService.searchGit(searchTerm).then(
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
