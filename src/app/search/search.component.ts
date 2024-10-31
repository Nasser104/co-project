import { Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router'; 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private router: Router) {}

  goToSearchpage () {
      this.router.navigate(["/searchpage"])
    }

//////////////////////////////////////////////////////////////////////////


}
