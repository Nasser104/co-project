import { Component } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent {

  showPublic: boolean = true; 
  showFriends: boolean = false; 
  showApp: boolean = false; 

  togglePublic(): void {
    this.showPublic = true;
    this.showFriends = false;
    this.showApp = false;
  }

  toggleFriends(): void {
    this.showFriends = true;
    this.showPublic = false;
    this.showApp = false;
  }

  toggleApp(): void {
    this.showApp = true;
    this.showPublic = false;
    this.showFriends = false;
  }
}
