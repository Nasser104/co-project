import { Component, HostBinding } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {
  currentCustomer = 'Ruba Nasser';

  constructor(private router: Router) {}

isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
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
