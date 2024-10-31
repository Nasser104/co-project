import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainMenuComponent } from '../main-menu/main-menu.component'

@Component({
  selector: 'app-footermain',
  templateUrl: './footermain.component.html',
  styleUrls: ['./footermain.component.css']
})
export class FootermainComponent {

  constructor(private router: Router) {}

  goToHome () {
    this.router.navigate(["/home"])
  }

  goToSearch () {
    this.router.navigate(["/search"])
  }

  goToAlerts () {
    this.router.navigate(["/alerts"])
  }

  goToMainMenu () {
    this.router.navigate(["/main-menu"])
  } 

}
