import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PlayInData} from '../../../interfaces/play-in-data';
import {UserPredictColumn} from '../../../interfaces/user-predict-column';

@Component({
  selector: 'app-play-in',
  templateUrl: './play-in.component.html',
  styleUrls: ['./play-in.component.sass']
})
export class PlayInComponent {

  // COMPONENT PROPERTIES -------------------------------------------------------------
  // INPUTS
  @Input() data: PlayInData;
  // OUTPUTS
  @Output() processedData: EventEmitter<UserPredictColumn[]> = new EventEmitter();

  // -----------------------------------------------------------------------------------
  // METHOD -> EMMIT EVENT FOR A PARENT COMPONENT RECEIVE THE PROCESSED DATA
  emmitEventProcessedData(value: UserPredictColumn[]) {
    this.processedData.emit(value);
  }

} // COMPONENT ENDS
