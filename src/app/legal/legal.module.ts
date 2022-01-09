import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LegalComponent } from './legal.component';

const routes: Routes = [
    {
      path: '',
      component: LegalComponent,
    }
  ];  

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LegalComponent],
  exports: [RouterModule],
})
export class LegalModule {}
