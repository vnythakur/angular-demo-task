import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponent } from './delivery.component';
import { AppMaterialModule } from '../shared/app-material.module';
import { DeliveryTableComponent } from './delivery-table/delivery-table.component';

const routes: Routes = [
    {
      path: '',
      component: DeliveryComponent,
    }
  ];  

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AppMaterialModule
  ],
  declarations: [DeliveryComponent, DeliveryTableComponent],
  exports: [RouterModule],
})
export class DeliveryModule {}
