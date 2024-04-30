import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  id!:number;
  constructor(private bookService:BookService,
    private router:ActivatedRoute
  ){
  }
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
  }



}
