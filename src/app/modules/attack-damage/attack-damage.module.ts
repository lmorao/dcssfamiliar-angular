import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponListComponent } from './components/weapon-list/weapon-list.component';
import { WeaponDamageComponent } from './components/weapon-damage/weapon-damage.component';
import { EnemyListComponent } from './components/enemy-list/enemy-list.component';



@NgModule({
  declarations: [WeaponListComponent, WeaponDamageComponent, EnemyListComponent],
  imports: [
    CommonModule
  ]
})
export class AttackDamageModule { }
