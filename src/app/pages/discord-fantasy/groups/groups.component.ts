import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserPredictColumn} from '../../../interfaces/user-predict-column';
import {GroupsData} from '../../../interfaces/groups-data';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.sass']
})
export class GroupsComponent {

  // COMPONENT PROPERTIES -------------------------------------------------------------
  // INPUTS
  @Input() data: GroupsData;
  // OUTPUTS
  @Output() processedData: EventEmitter<UserPredictColumn[]> = new EventEmitter();

  // -----------------------------------------------------------------------------------
  // METHOD -> EMMIT EVENT FOR A PARENT COMPONENT RECEIVE THE PROCESSED DATA
  emmitEventProcessedData(value: UserPredictColumn[]) {
    this.processedData.emit(value);
  }

} // COMPONENT ENDS
