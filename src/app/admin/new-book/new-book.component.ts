import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/Models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  public BookForm!:FormGroup;

  constructor(private route:Router,private fb:FormBuilder,private bookService:BookService){

  }

  ngOnInit(): void {
    this.BookForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', [Validators.required]],
      price: [0,[Validators.required]],
      imageUrl: ['',[Validators.required]],
      releaseDate:['1925-04-10T00:00:00.000+00:00']
    });
  }


  OnSubmit() {
    let book:Book=this.BookForm.value;
    this.bookService.saveBook(book).subscribe({
      next : data=>{
        console.log(data);
      }
    });
    this.route.navigateByUrl(`/admin/list-of-books`);
  }
  

}
