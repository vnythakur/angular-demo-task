import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ToyFactoryComponent } from './toy-factory.component';

const routes: Routes = [
    {
      path: '',
      component: ToyFactoryComponent,
    }
  ];  

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ToyFactoryComponent],
  exports: [RouterModule],
})
export class ToyFactoryModule {}
