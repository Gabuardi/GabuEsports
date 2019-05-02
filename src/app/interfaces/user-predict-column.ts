export interface UserPredictColumn {
  user_name: string;
  pts: number;
  states?: string[];
  teams_predictions: string[] | number[];
}
