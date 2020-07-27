import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonumentPageRoutingModule } from './monument-routing.module';

import { MonumentPage } from './monument.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonumentPageRoutingModule
  ],
  declarations: [MonumentPage]
})
export class MonumentPageModule {}
