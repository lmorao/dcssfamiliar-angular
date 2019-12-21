import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule } from '../../shared/material.module';



import { AttackDamageComponent } from './attack-damage.component';

import { WeaponListComponent } from './components/weapon-list/weapon-list.component';
import { WeaponDamageComponent } from './components/weapon-damage/weapon-damage.component';
import { EnemyListComponent } from './components/enemy-list/enemy-list.component';
import { AddWeaponComponent } from './components/add-weapon/add-weapon.component';



@NgModule({
  declarations: [
    WeaponListComponent, WeaponDamageComponent, EnemyListComponent, AttackDamageComponent, AddWeaponComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class AttackDamageModule { }
