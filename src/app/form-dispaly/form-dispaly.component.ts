import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-dispaly',
  templateUrl: './form-dispaly.component.html',
  styleUrls: ['./form-dispaly.component.css']
})
export class FormDispalyComponent implements OnInit {
  user: User;
  userName: string;

  constructor( private userRequestService: UserService){
    this.userRequestService.userName = "fuaad001";
    this.userRequestService.userRequest();
    this.user = this.userRequestService.user;
  }


  userLookup(){
    this.userRequestService.userLookup(this.userName);
    this.userRequestService.userRequest();
    this.user = this.userRequestService.user;
  }

  ngOnInit() {

   }

}
