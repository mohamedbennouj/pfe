import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CulturePage } from './culture.page';

const routes: Routes = [
  {
    path: '',
    component: CulturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CulturePageRoutingModule {}
