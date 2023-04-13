import { Action } from '@ngrx/store';
import { FoodItem } from '../../food.model';

export enum FoodActionTypes {
  LoadFoods = '[Food] Load Foods',
  LoadFoods_Success = '[Food] LoadFoods_Success',
  LoadFoods_Error = '[Food] LoadFoods_Error',
  SelectFood = '[Food] SelectFood',
}

export class LoadFoods implements Action {
  readonly type = FoodActionTypes.LoadFoods;
}

export class LoadFoodSuccess implements Action {
  readonly type = FoodActionTypes.LoadFoods_Success;
  constructor(public payload: FoodItem[]) {}
}

export class LoadFoodError implements Action {
  readonly type = FoodActionTypes.LoadFoods_Error;
  constructor(public payload: Error) {}
}

export class SelectFood implements Action {
  readonly type = FoodActionTypes.SelectFood;
  constructor(public payload: FoodItem) {}
}

export type FoodActions =
  | LoadFoods
  | LoadFoodSuccess
  | LoadFoodError
  | SelectFood;
