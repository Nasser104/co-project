import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(["/home"])
  }

  goToMainMenu() {
    this.router.navigate(["/main-menu"])
  }

  goToAlerts() {
    this.router.navigate(["/alerts"])
  }

  goToMessages() {
    this.router.navigate(["/messages"])
  }

  goToProfile() {
    this.router.navigate(["/profile"])
  }

  /////////////////////////////////////////

  isActiveRoute(route: string): boolean {
    return this.router.url.includes(route);
  }
  

}
