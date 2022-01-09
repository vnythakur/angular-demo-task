import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponent } from './delivery.component';

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
    RouterModule.forChild(routes)
  ],
  declarations: [DeliveryComponent],
  exports: [RouterModule],
})
export class DeliveryModule {}
