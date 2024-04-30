import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/book.model';
import { AppstateService } from 'src/app/services/appstate.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cart!:Book[]
  TotalPrice:number =0;


  constructor(private bookService:BookService,private appstate:AppstateService){
  }


  ngOnInit(): void {
    this.bookService.getCartBooks(this.appstate.AuthState.user.id).subscribe(
      (data)=>{
        this.cart=data;
        this.calculatingPrice();
      },
      (error)=>{
        console.log(error);
      }
    )
  }


  calculatingPrice(){
    this.cart.forEach( book=> {
      this.TotalPrice += book.price;
      console.log(this.TotalPrice);
    });
  }


  HandleDeleteFromCart(BookId:number) {
    this.TotalPrice=0;
    this.bookService.deleteFromCart(BookId,this.appstate.AuthState.user.id).subscribe(
      (data)=>{
        this.cart=data;
        this.calculatingPrice();
      },
      (error)=>{
        console.log(error);
      }
    )
  }



}
