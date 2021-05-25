import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user-class/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  userName: string;

  constructor(private http:HttpClient){
    this.user = new User("","","","","","","", "", new Date());
  }


    userRequest(){

      interface ApiResponse{
        login: string;
        name: string;
        bio: any;
        public_repos: number;
        followers: number;
        following: number;
        avatar_url: any;
        html_url: any;
      }

      let promise = new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>( "https://api.github.com/users/"+ this.userName ).toPromise().then(response=>{

          this.user.avatar = response.avatar_url
          this.user.username = response.login
          this.user.name = response.name
          this.user.bio = response.bio
          this.user.repositories = response.public_repos
          this.user.followers = response.followers
          this.user.following = response.following
          this.user.link = response.html_url


        resolve(response);

      },
      error=>{

          this.user.avatar = "https://avatars1.githubusercontent.com/u/47349274?v=4"
          this.user.username = "annechege"
          this.user.name = "annechege"
          this.user.bio = "Full-Stack Developer"
          this.user.repositories = 22
          this.user.followers = 2
          this.user.following = 0
          this.user.link = "https://github.com/annechege"

        reject(error);


        })
      })

      return promise

    }

    userLookup(userName: string){
      this.userName = userName;
    }


}
