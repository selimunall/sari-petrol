import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public activeHamburger = true; 
  public active() {
    this.activeHamburger = !this.activeHamburger;
  }
}
