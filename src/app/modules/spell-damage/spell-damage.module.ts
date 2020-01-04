import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellDamageComponent } from './spell-damage.component';
import { SpellListComponent } from './spell-list/spell-list.component';

import { SelectArmourComponent } from './../select-armour/select-armour.component';

import {MaterialModule } from '../../shared/material.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [SpellDamageComponent, SpellListComponent,
    SelectArmourComponent,

  ],
  imports: [
    CommonModule,

    MaterialModule,
    NgbModule,
  ]
})
export class SpellDamageModule { }
