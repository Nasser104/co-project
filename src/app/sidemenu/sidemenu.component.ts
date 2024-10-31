import { Component, HostBinding } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router'; 
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {
  currentCustomer = 'Ruba Nasser';

  constructor(private router: Router) {}

goToHome () {
  this.router.navigate(["/home"])
}

goToMainMenu () {
  this.router.navigate(["/main-menu"])
}

goToAlerts () {
  this.router.navigate(["/alerts"])
}

goToInterests () {
  this.router.navigate(["/interests"])
}

goToFriendships () {
  this.router.navigate(["/friendships"])
}

goToMessages () {
  this.router.navigate(["/messages"])
}

goToWinwatch () {
  this.router.navigate(["/winwatch"])
}

//////////////////////////////////////////////////////

isDarkMode: boolean = false;

/*@HostBinding('class') get modeClass() {
  return this.isDarkMode ? 'dark-mode' : 'light-mode';
}*/

toggleMode() {
  this.isDarkMode = !this.isDarkMode;
}

///////////////////////////////////////////////////////////


}
