import { Component, OnInit } from '@angular/core';
import { Weapon } from '../../../../shared/models/weapon.model'
import { SelectedWeaponService } from '../../../../core/services/selected-weapon.service'
import { WeaponListService } from '../../../../core/services/weapon-list.service'
import {  brand_color } from '../../../../weapon_types'
import { WeaponListDB } from '../../../../weapon_types'

@Component({
  selector: 'weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.sass']
})
export class WeaponListComponent implements OnInit {

  //TODO hardcoded weapon list

    //new Weapon{"dagger", "elec", 1),
  weapons = [
    {name: 'unarmed', slaying:"+0", brand:""},
  ];

  selectedWeapon =  {name: 'unarmed', slaying:"+0", brand:""};
  brand_color = function (brand) {
    return brand_color(brand)

  }

  
  getWeapon = function(weapon) {
    return WeaponListDB.prototype.getWeapon(weapon);
  }
  searchedWeapon = {
    name: this.getWeapon(search)[name], slaying: "+0", brand: ""
  };

  selectWeapon (weapon) {
    this.selectedWeaponService.selectWeapon(weapon)
    this.selectedWeapon = weapon;
  }

  constructor(
    private selectedWeaponService: SelectedWeaponService,
    private weaponListService: WeaponListService,
  ) { 
  }

  ngOnInit() {
    this.selectedWeaponService.weapon.subscribe(weapon => {this.selectedWeapon = weapon; })
    this.weaponListService.weaponList.subscribe(weaponList => {this.weapons = weaponList; })
  }

}
