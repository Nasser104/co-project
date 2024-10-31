import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  showPost: boolean = true; 
  showShare: boolean = false; 
  showTag: boolean = false;

  togglePost(): void {
    this.showPost = true;
    this.showShare = false;
    this.showTag = false;
  }

  toggleShare(): void {
    this.showShare = true;
    this.showPost = false;
    this.showTag = false; 
  }

  toggleHashtag(): void {
    this.showTag = true;
    this.showPost = false;
    this.showShare = false; 
  }

  /*||||||||||*/

  Name: string = 'Ruba Nasser';
  Followers: string = '120,000';
  Tweets: string = '120';
  Interaction: string ='250,000';
  MonthlyViews: string = '200,000';

}
