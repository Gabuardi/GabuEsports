import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input() currentUser: User;
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
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

} // COMPONENT ENDS
