import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  ngOnInit() {
  }

  // ------------------------------------------------------
  // METHOD -> ADVICE TO PARENT COMPONENT THAT A SIDE NAV TOGGLE BUTTON HAVE BEEN CLICKED
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

} // COMPONENT ENDS
