import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'toy-factory', 
    loadChildren: () => import('./toy-factory/toy-factory.module').then(m => m.ToyFactoryModule), 
  },
  {
    path: 'delivery', 
    loadChildren: () => import('./delivery/delivery.module').then(m => m.DeliveryModule), 
  },
  {
    path: 'legal', 
    loadChildren: () => import('./legal/legal.module').then(m => m.LegalModule), 
  },
  {
    path: '', redirectTo: 'delivery', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
