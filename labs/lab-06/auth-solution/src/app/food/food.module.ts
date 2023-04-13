import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodContainerComponent } from './food-container/food-container.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { FoodRoutingModule } from './food-routing.module';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FoodContainerComponent, FoodListComponent, FoodEditComponent],
  imports: [
    CommonModule,
    FoodRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FoodModule { }
