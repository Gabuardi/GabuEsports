import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserPredictColumn} from '../../../interfaces/user-predict-column';
import {KnockoutsData} from '../../../interfaces/knockouts-data';

@Component({
  selector: 'app-knockouts',
  templateUrl: './knockouts.component.html',
  styleUrls: ['./knockouts.component.sass']
})
export class KnockoutsComponent {

  // COMPONENT PROPERTIES -------------------------------------------------------------
  // INPUTS
  @Input() data: KnockoutsData;
  // OUTPUTS
  @Output() processedData: EventEmitter<UserPredictColumn[]> = new EventEmitter();

  // -----------------------------------------------------------------------------------
  // METHOD -> EMMIT EVENT FOR A PARENT COMPONENT RECEIVE THE PROCESSED DATA
  emmitEventProcessedData(value: UserPredictColumn[]) {
    this.processedData.emit(value);
  }

} // COMPONENT ENDS
