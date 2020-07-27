import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonumentPage } from './monument.page';

const routes: Routes = [
  {
    path: '',
    component: MonumentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonumentPageRoutingModule {}
