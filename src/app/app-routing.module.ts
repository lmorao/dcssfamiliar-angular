import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeaponListComponent } from './modules/attack-damage/components/weapon-list/weapon-list.component';



const routes: Routes = [
  { path: "weaponlist", component: WeaponListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
