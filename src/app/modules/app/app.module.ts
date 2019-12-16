import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';



import {MaterialModule} from '../../shared/material.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WeaponListComponent } from '../attack-damage/components/weapon-list/weapon-list.component';
import { AttackDamageComponent } from '../attack-damage/attack-damage.component';
import { WeaponDamageComponent } from '../attack-damage/components/weapon-damage/weapon-damage.component';
import { ProfileComponent } from '../profile/profile.component'
import { SkillsMenuComponent } from '../skills-menu/skills-menu.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WeaponListComponent,
    AttackDamageComponent,
    WeaponDamageComponent,
    ProfileComponent,
    SkillsMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
