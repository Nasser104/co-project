import { Component, OnInit } from '@angular/core';

// new code 

interface DisplayState {
  showAll: boolean;
  showRecent: boolean;
  showPosts: boolean;
  showPhoto: boolean;
  showVideo: boolean;
  showPages: boolean;
  showProfiles: boolean;
  showComps: boolean;
  showNews: boolean;
  showBCC: boolean,
  showPANDL: boolean;
};

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent {

  // new code 

  displayState: DisplayState = {
    showAll: true,
    showRecent: true,
    showPosts: false,
    showPhoto: false,
    showVideo: false,
    showProfiles: false,
    showPages: false,
    showComps: false,
    showNews: false,
    showBCC: false,
    showPANDL: false,
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

////////////////////////////////////////


}
