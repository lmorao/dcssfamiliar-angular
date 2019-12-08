import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttackDamageComponent } from '../attack-damage/attack-damage.component';



const routes: Routes = [
  { path: "attackdamage", component: AttackDamageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
