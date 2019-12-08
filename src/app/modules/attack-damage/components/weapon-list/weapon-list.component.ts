import { Component, OnInit } from '@angular/core';
import { Weapon } from '../../../../shared/models/weapon.model'
import { SelectedWeaponService } from '../../../../core/services/selected-weapon.service'

@Component({
  selector: 'weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.sass']
})
export class WeaponListComponent implements OnInit {

  //TODO hardcoded weapon list

    //new Weapon{"dagger", "elec", 1),
  weapons = [
  new Weapon("dagger","+1","elec"),
  new Weapon("hunting sling",),
  new Weapon("long sword","+3","elec"),
  new Weapon("long sword","+0","elec"),
  new Weapon("falchion","+0","elec"),
  new Weapon("triple sword","+0","elec"),
  ];

  selectedWeapon = {"name":"TODO"};

  selectWeapon (weapon) {
    this.selectedWeaponService.selectWeapon(weapon)
    this.selectedWeapon = weapon;
  }

  constructor(
    private selectedWeaponService: SelectedWeaponService,
  ) { 
  }

  ngOnInit() {
    this.selectedWeaponService.weapon.subscribe(weapon => this.selectedWeapon = weapon)
  }

}
