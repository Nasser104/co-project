import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  showForYou: boolean = true; 
  showFollow: boolean = false; 

  toggleForYou(): void {
    this.showForYou = true;
    this.showFollow = false;
  }

  toggleFollow(): void {
    this.showFollow = true;
    this.showForYou = false;
  }

  isActiveRoute(route: string): boolean {
    return this.router.url.includes(route);
  }





  openCity(evt: Event, cityName: string) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      const tabElement = tabcontent[i] as HTMLElement;
      tabElement.style.display = "none";
    }
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      const tablinkElement = tablinks[i] as HTMLElement;
      tablinkElement.classList.remove("active");
    }
    const selectedCity = document.getElementById(cityName);
    if (selectedCity) {
      const selectedCityElement = selectedCity as HTMLElement;
      selectedCityElement.style.display = "block";
    }
    const currentTarget = evt.currentTarget as HTMLElement;
    currentTarget.classList.add("active");
  }
  
  

}