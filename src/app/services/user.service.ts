import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from '../Models/user.model';
import { HttpClient } from '@angular/common/http';

const API_URL=`${environment.API_URL}/users`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getAlluser():Observable<any>{
    return this.httpClient.get(`${API_URL}`);
  }

}
