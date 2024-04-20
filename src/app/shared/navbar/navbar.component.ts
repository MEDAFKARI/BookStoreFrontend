import { Component } from '@angular/core';
import { AppstateService } from 'src/app/services/appstate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public appstate:AppstateService){

  }

  public routes =[
    { Path: 'home', ComponentName: "Home"},
    { Path: 'admin', ComponentName: "Admin"}
  ]
}
