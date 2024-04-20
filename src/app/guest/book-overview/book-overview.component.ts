import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Book } from 'src/app/Models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.css']
})
export class BookOverviewComponent implements OnInit {


  public book!:Book;
  id!:number;
  
  constructor(private router:Router,private route:ActivatedRoute,private bookService:BookService){
  }

  ngOnInit(): void {
   this.getBook();
  }

  getBook(){
    this.id=this.route.snapshot.params['id'];
    this.bookService.getBook(this.id).subscribe(
      {
        next:data=>{
          this.book=data;
        },
        error:error=>{
            console.log(error);
        }
      }
    ) 
  }

  HandleNavigateHomePage() {
    this.router.navigateByUrl(`/`);
    }


}
