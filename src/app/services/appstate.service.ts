import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppstateService {
    BookState:any={
      totalPages:0,
      totalElements:0,
      offset:0,
      number:0,
      pageSize:8,
      currentPage:0,
      keyword: "",
      BookList:[],
      status:"LOADING",
    }

    AuthState:any={
      username:"",
      isAuthenticated:false,
      role:"",
    }

    public setAuthState(state:any){
      this.AuthState={...this.AuthState, ...state}
    }



    public setBookState(state:any){
        this.BookState = {...this.BookState, ...state}
    }


}
