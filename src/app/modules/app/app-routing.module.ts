import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttackDamageComponent } from '../attack-damage/attack-damage.component';
import { InfoComponent } from '../info/info.component';



const routes: Routes = [
  { path: "attackdamage", component: AttackDamageComponent },
  { path: "", component: AttackDamageComponent },
  { path: "info", component: InfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
