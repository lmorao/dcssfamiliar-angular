import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MaterialModule} from './material.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WeaponListComponent } from './modules/attack-damage/components/weapon-list/weapon-list.component';
import { AttackDamageComponent } from './modules/attack-damage/attack-damage.component';
import { WeaponDamageComponent } from './modules/attack-damage/components/weapon-damage/weapon-damage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WeaponListComponent,
    AttackDamageComponent,
    WeaponDamageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
