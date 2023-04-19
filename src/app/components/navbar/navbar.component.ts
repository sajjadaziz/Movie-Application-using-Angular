import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  faBars = faBars;

  constructor(private router: Router) { }

  routes = this.router.config.map((route: Route)=> route?.path || 'Home')

  pageTitle = 'Home';
  showDropdown = false;

  ngOnInit(): void { }
  
  changeRoute(route: string): void {
    this.pageTitle = route;
    const pathToGo = route === 'Home' ? '/' : route;
    this.router.navigate([pathToGo]);
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }
}
