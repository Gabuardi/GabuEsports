import {Match} from './match';
import {UserPredictColumn} from './user-predict-column';

export interface MatchesPredicts {
  matches: [Match];
  user_predicts: [UserPredictColumn];
}
