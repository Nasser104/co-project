import { Component, ElementRef } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router'; 

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {

  showMainMenu: boolean = true; 
  showEidtProfile: boolean = false; 
  showPrivate: boolean = false; 
  showReader: boolean = false; 
  showInterests: boolean = false;

  toggleMainMenu(): void {
    this.showMainMenu = true;
    this.showEidtProfile = false;
    this.showPrivate = false;
    this.showReader = false;
    this.showInterests = false;
  }

  toggleEidtProfile(): void {
    this.showEidtProfile = true;
    this.showMainMenu = false;
    this.showPrivate = false;
    this.showReader = false;
    this.showInterests = false;
  }

  togglePrivate(): void {
    this.showPrivate = true;
    this.showMainMenu = false;
    this.showEidtProfile = false;
    this.showReader = false;
    this.showInterests = false;
  }

  toggleReader(): void {
    this.showReader = true;
    this.showMainMenu = false;
    this.showEidtProfile = false;
    this.showPrivate = false;
    this.showInterests = false;
  }

  toggleInterests(): void {
    this.showInterests = true;
    this.showMainMenu = false;
    this.showEidtProfile = false;
    this.showPrivate = false;
    this.showReader = false;
  }

  ///////////////////////////////////////////

  constructor(private router: Router) {}

  goToMainMenu() {
    this.router.navigate(["/main-menu"])
  }

  goToFriendships() {
    this.router.navigate(["/friendships"])
  }

  goToProfile() {
    this.router.navigate(["/profile"])
  }

  goToMessages() {
    this.router.navigate(["/messages"])
  }

  goToCommunity() {
    this.router.navigate(["/community"])
  }

  goToWinwatch() {
    this.router.navigate(["/winwatch"])
  }

  goToInstpin() {
    this.router.navigate(["/instpin"])
  }

  ///////////////////////////////////////////////////

  isChecked: boolean = false;

  toggleCheckbox(): void {
    this.isChecked = !this.isChecked;
  }

}
