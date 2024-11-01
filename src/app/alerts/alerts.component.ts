import { Component } from '@angular/core';

// new code 

interface DisplayState {
  showAll: boolean;
  showPosts: boolean;
  showProfiles: boolean;
  showPages: boolean;
  showCompanies: boolean;
  showNews: boolean;
  showPANDL: boolean;
  showImages: boolean;
  showVideos: boolean;
}

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent {

  // new code 

  dropdownItems: string[] = ['Menu item 1', 'Menu item 2', 'Menu item 3'];

  onItemSelected(item: string): void {
    console.log('Selected item:', item);
  }

    // تهيئة الحالة الافتراضية
    displayState: DisplayState = {
      showAll: true,
      showPosts: false,
      showProfiles: false,
      showPages: false,
      showCompanies: false,
      showNews: false,
      showPANDL: false,
      showImages: false,
      showVideos: false,
    };

    // دالة لتغيير الحالة
    toggleDisplay(key: keyof DisplayState) {
      // تعيين جميع القيم إلى false
      Object.keys(this.displayState).forEach((k) => {
        this.displayState[k as keyof DisplayState] = false;
      });

      // تعيين القيمة المطلوبة إلى true
      this.displayState[key] = true;
    }

  // old code 

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
