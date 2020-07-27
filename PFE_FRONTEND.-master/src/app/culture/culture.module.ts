import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CulturePageRoutingModule } from './culture-routing.module';

import { CulturePage } from './culture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CulturePageRoutingModule
  ],
  declarations: [CulturePage]
})
export class CulturePageModule {}
