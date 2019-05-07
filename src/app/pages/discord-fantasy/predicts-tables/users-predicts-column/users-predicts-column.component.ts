import {Component, Input, OnInit} from '@angular/core';
import {UserPredictColumn} from '../../../../interfaces/user-predict-column';

@Component({
  selector: 'app-users-predicts-column',
  templateUrl: './users-predicts-column.component.html',
  styleUrls: ['./users-predicts-column.component.sass']
})
export class UsersPredictsColumnComponent implements OnInit {

  @Input() data: UserPredictColumn;

  constructor() { }

  ngOnInit() {
  }

}
