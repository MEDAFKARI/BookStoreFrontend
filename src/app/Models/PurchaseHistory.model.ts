import { Book } from "./book.model";
import { User } from "./user.model";

export class PurchaseHistory {
    id:number |undefined;
    user:User = new User();
    book:Book = new Book();
    price:number | undefined;
    purchaseDate:Date = new Date();

    constructor(user:User, book:Book, price?:number ) {
        this.user=user;
        this.book=book;
        this.price=price;
    }
}