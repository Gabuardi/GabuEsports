import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  // COMPONENT PROPERTIES -------------------------------------------------------------
  // INPUTS
  @Input() currentUser: User;
  // OUTPUTS
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  // ------------------------------------------------------
  // METHOD -> ADVICE TO PARENT COMPONENT THAT A SIDE NAV TOGGLE BUTTON HAVE BEEN CLICKED
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  // METHOD -> LOG OUT THE CURRENT USER AND REDIRECT TO SIGN IN PAGE
  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/sign-in']);
  }

  // METHOD -> OPEN IN ANOTHER WINDOW AN DISCORD INVITATION
  openDiscordInvitation(): void {
    window.open('https://discord.gg/jQuKtMW');
  }

} // COMPONENT ENDS
