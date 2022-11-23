import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DestinationPageRoutingModule } from './destination-routing.module';

import { DestinationPage } from './destination.page';
import { DestinationCardComponent } from 'src/app/components/destination-card/destination-card.component';

@NgModule({
  // Modules
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestinationPageRoutingModule
  ],
  // Components
  declarations: [
    DestinationPage,
    DestinationCardComponent
  ]
})
export class DestinationPageModule {}
