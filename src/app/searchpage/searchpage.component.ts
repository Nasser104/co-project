import { Component, OnInit } from '@angular/core';

// new code 

interface DisplayState {
  showAll: boolean;
  showRecent: boolean;
  showPosts: boolean;
  showPhotos: boolean;
  showVideos: boolean;
  showProfiles: boolean;
  showPages: boolean;
  showCompanies: boolean;
  showNews: boolean;
  showPANDL: boolean;
}

interface FeedItem {
  title: string;
  contentSnippet: string;
  link: string;
  // Add other properties as needed
}

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent {

  // new code 

  // تهيئة الحالة الافتراضية
  displayState: DisplayState = {
    showAll: true,
    showRecent: true,
    showPosts: false,
    showPhotos: false,
    showVideos: false,
    showProfiles: false,
    showPages: false,
    showCompanies: false,
    showNews: false,
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

  // الكود القديم

  inputValue: string = '';

  showAll: boolean = true; 
  showPosts: boolean = false; 
  showPages: boolean = false; 
  showImages: boolean = false; 
  showVideos: boolean = false; 
  showBlog: boolean = false; 

  toggleAll(): void {
    this.showAll = true;
    this.showPosts = false;
    this.showPages = false;
    this.showImages = false;
    this.showVideos = false;
    this.showBlog = false;
  }

  togglePosts(): void {
    this.showPosts = true;
    this.showAll = false;
    this.showPages = false;
    this.showImages = false;
    this.showVideos = false;
    this.showBlog = false;
  }

  togglePages(): void {
    this.showPages = true;
    this.showAll = false;
    this.showPosts = false;
    this.showImages = false;
    this.showVideos = false;
    this.showBlog = false;
  }

  toggleImages(): void {
    this.showImages = true;
    this.showAll = false;
    this.showPosts = false;
    this.showPages = false;
    this.showVideos = false;
    this.showBlog = false;
  }

  toggleVideos(): void {
    this.showVideos = true;
    this.showAll = false;
    this.showPosts = false;
    this.showPages = false;
    this.showImages = false;
    this.showBlog = false;
  }

  toggleBlog(): void {
    this.showBlog = true;
    this.showAll = false;
    this.showPosts = false;
    this.showPages = false;
    this.showImages = false;
    this.showVideos = false;
  }

////////////////////////////////////////


}
