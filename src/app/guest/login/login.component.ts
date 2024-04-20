import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppstateService } from 'src/app/services/appstate.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup;

  constructor(private fb:FormBuilder, private auth:AuthService,private route:Router,public appstate:AppstateService){
  }


  ngOnInit(): void {
      this.loginForm = this.fb.group({
        email:'',
        password:''
      })
  }

  handleSubmit() {
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value).subscribe(
    (data)=>{
        localStorage.setItem('token',data.token);
        localStorage.setItem('username',data.username);
        localStorage.setItem('role',data.role);
        console.log(data.role)
        this.appstate.setAuthState({
          isAuthenticated:true,
        })
        this.route.navigateByUrl('/')
    },
    (error)=>{
        console.log(error);
    }
    )
  }

}
