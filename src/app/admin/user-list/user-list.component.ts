import { Component, OnInit } from '@angular/core';
import { AppstateService } from 'src/app/services/appstate.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(public appstate:AppstateService,private userService:UserService){}


  ngOnInit(): void {
    this.getUsersList();
  }


  getUsersList(){
      this.userService.getAlluser().subscribe(
        (data)=>{
          console.log(data);
            this.appstate.setUsers({
              users:data
            });
            console.log(this.appstate.UsersState.users);
        },
        (error)=>{
            console.log(error);
        }
      )
  }




}
