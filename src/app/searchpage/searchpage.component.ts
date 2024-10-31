import { Component, OnInit } from '@angular/core';

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
export class SearchpageComponent{

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
