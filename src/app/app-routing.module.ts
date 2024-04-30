import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './guest/home/home.component';
import { LoginComponent } from './guest/login/login.component';
import { RegisterComponent } from './guest/register/register.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ProfileComponent } from './user/profile/profile.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';
import { NewBookComponent } from './admin/new-book/new-book.component';
import { BookListComponent } from './admin/book-list/book-list.component';
import { UpdateBookComponent } from './admin/update-book/update-book.component';
import { BookOverviewComponent } from './guest/book-overview/book-overview.component';
import { HomelayoutComponent } from './guest/homelayout/homelayout.component';
import { AuthorizationGuard } from './guards/authorization.guard';
import { AuthenticationGuard } from './guards/authentication.guard';
import { UserListComponent } from './admin/user-list/user-list.component';
import { PaymentComponent } from './user/payment/payment.component';
import { CartComponent } from './user/cart/cart.component';


const routes: Routes = [
  { path: "", redirectTo:"home", pathMatch:"full"},

  {path:"", component:HomelayoutComponent, children:[
    { path: "home", component: HomeComponent},
    { path: "book/:id", component: BookOverviewComponent},
    { path: "profile",canActivate:[AuthenticationGuard], component: ProfileComponent},
    { path: "payment", canActivate:[AuthenticationGuard],component: PaymentComponent},
    { path: "cart", canActivate:[AuthenticationGuard], component: CartComponent}
  
  ]},

  
  { path: "login", component: LoginComponent},
  { path: "signup", component: RegisterComponent},


  { path: "admin", component:AdminComponent, canActivate:[AuthorizationGuard,AuthenticationGuard],  children:[
    { path: "", component: NewBookComponent},
    { path: "list-of-books", component: BookListComponent},
    { path: "update-book/:id", component: UpdateBookComponent},
    { path: "user-list", component: UserListComponent}
  ] },

  { path: "Unauthorized", component: UnauthorizedComponent},
  { path: "**", component: NotFoundComponent}
  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports :[
    RouterModule
  ]
})
export class AppRoutingModule { }
