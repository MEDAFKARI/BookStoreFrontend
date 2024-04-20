import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  navLinks: any[] = [
    { path: '/admin/', label: 'New Book' },
    { path: '/admin/list-of-books', label: 'List Of Books' },
    { path: '/admin/user-list', label: 'User List' }
  ];
}
