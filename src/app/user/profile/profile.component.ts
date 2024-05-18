import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { AppstateService } from 'src/app/services/appstate.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  file!: File;


  constructor(private appstate:AppstateService,
    private uploadFile:UploadService
  ){}

  user:User = this.appstate.AuthState.user


  ngOnInit(): void {
    console.log(this.user);
  }

  onChange(event: any) {
    const file: File = event.target.files[0];

  }


  Submit(){
    if (this.file) {
      console.log(this.file);
      // this.userService.ChangeProfile().subscribe({

      // })
    //   this.uploadFile.uploadImage(this.file).subscribe(
    //     (data)=>{
    //         console.log(data)
            
    //     },
    //     (error)=>{
    //         console.log(error)
    //     }
    // )
    }
  }





}
