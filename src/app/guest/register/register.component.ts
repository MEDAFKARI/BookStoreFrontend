import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { RegisterRequest } from 'src/app/Models/registerRequest.Model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  public registerForm!:FormGroup;

  private registerReq!:RegisterRequest;

  private responseToken!:string;

  constructor(private fb:FormBuilder,private authService:AuthService,private route:Router){

  }
  ngOnInit(): void {
    this.registerForm =this.fb.group({
      username: new FormControl("",Validators.required),
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required])
    })
  }


HandleSubmit() {
  if(this.registerForm.valid){
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe(
      (data)=>{
        this.responseToken=data.token;
        console.log(jwtDecode(this.responseToken));
        localStorage.setItem('token',this.responseToken);
        this.route.navigateByUrl('/');
      },
      (error)=>{
          console.log(error);
      }
    );
  }
}






}
