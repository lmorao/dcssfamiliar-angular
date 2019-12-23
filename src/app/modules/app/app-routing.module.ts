import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttackDamageComponent } from '../attack-damage/attack-damage.component';
import { InfoComponent } from '../info/info.component';
import { LandUrlComponent } from '../land-url/land-url.component';



const routes: Routes = [
  { path: "attackdamage", component: AttackDamageComponent },
  { path: "", component: AttackDamageComponent },
  { path: "info", component: InfoComponent },
  { path: "parse/:profile/:name/:species/:skills", component: LandUrlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
