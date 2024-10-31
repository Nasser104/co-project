import { Component } from '@angular/core';

interface FriendRequest {
  id: number;
  name: string;
}

@Component({
  selector: 'app-friendships',
  templateUrl: './friendships.component.html',
  styleUrls: ['./friendships.component.css']
})
export class FriendshipsComponent {

  showSuggestions: boolean = true; 
  showFriends: boolean = false; 
  showInvitations: boolean = false; 
  showRequests: boolean = false;

  toggleSuggestions(): void {
    this.showSuggestions = true;
    this.showFriends = false;
    this.showInvitations = false;
    this.showRequests = false;
  }

  toggleFriends(): void {
    this.showFriends = true;
    this.showSuggestions = false;
    this.showInvitations = false;
    this.showRequests = false;
  }

  toggleInvitations(): void {
    this.showInvitations = true ;
    this.showSuggestions = false;
    this.showFriends = false;
    this.showRequests = false;
  }

  toggleRequests(): void {
    this.showRequests = true ;
    this.showSuggestions = false;
    this.showFriends = false;
    this.showInvitations = false;
  }


  ///////////////////////////////////////////////////

  requestList: FriendRequest[] = [];
  friendList: FriendRequest[] = [];

  constructor() {
    // Populate requestList with initial data (e.g., from an API call)
    this.requestList = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      // Add more request objects as needed
    ];
  }

  acceptFriendRequest(request: FriendRequest): void {
    const index = this.requestList.findIndex(item => item.id === request.id);
    if (index > -1) {
      this.requestList.splice(index, 1); // Remove request from requestList
      this.friendList.push(request); // Add request to friendList
    }
  }

}
