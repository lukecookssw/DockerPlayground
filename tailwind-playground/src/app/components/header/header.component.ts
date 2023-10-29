import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  mobileMenuOpened = false;

  profileOpened = false;
  profileOpen = "transition ease-out duration-100 transform opacity-100 scale-100";
  profileClose = "transition ease-in duration-75 transform opacity-0 scale-95";

  onProfileClicked() {
    this.profileOpened = !this.profileOpened;
  }
}
